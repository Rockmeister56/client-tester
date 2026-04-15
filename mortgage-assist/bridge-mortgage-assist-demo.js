// Botemia Bridge for Mortgage Assist Demo
// Generated: 4/15/2026, 1:42:52 PM
// Client ID: mortgage-assist-demo
// Version: 5.4 - BATON PASS FIX

(function() {
    "use strict";

    // ===== EMBEDDED CLIENT CONFIGURATION =====
    window.BotemiaConfig = {
    "id": "mortgage-assist-demo",
    "name": "Mortgage Assist Demo",
    "websiteUrl": "https://client-tester.netlify.app/mortgage-assist/",
    "agentId": "agent_7b0776ef6b855de5",
    "widgetId": "",
    "apiKey": "",
    "environment": "production",
    "industry": "mortgage",
    "modules": {
        "emailConfig": {
            "loanOfficerEmail": "loans@clientcompany.com",
            "ccEmail": "",
            "emailSubject": "New Lead: {{name}}"
        },
        "splashScreen": {
            "enabled": true,
            "agentId": "agent_7b0776ef6b855de5",
            "title": "Meet Tess",
            "subtitle": "Your Personal AI Smart Guide",
            "tessVideoUrl": "https://fcgbusobfdwnpoqyuzoe.supabase.co/storage/v1/object/sign/processed-videos/tess-button.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjJjNGVkZS0wYzRiLTQyMzAtOGE5MC1jMDhmNjhlNDVkNTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9jZXNzZWQtdmlkZW9zL3Rlc3MtYnV0dG9uLm1wNCIsImlhdCI6MTc3MzgwNDA4MSwiZXhwIjoxODA1MzQwMDgxfQ.07K0XCnTt3zAZPp2ZAgZ-SzYhZj6nW1Vun8WW-zDAVQ",
            "tessVideoFit": "cover",
            "tickerKeywords": "Mortgage Rates, Pre-Qualification, First-Time Buyer, Refinance, FHA Loans",
            "gradientCenter": "#1e4a8a",
            "gradientOuter": "#0a1a2f",
            "primaryButton": {
                "text": "Get AI help with Tess",
                "gradientTop": "#f8c400",
                "gradientBottom": "#d4a000",
                "hoverTop": "#ffd700",
                "hoverBottom": "#e0b000",
                "textColor": "#0a0f1e"
            },
            "secondaryButton": {
                "text": "Just Browsing",
                "gradientTop": "#3a4050",
                "gradientBottom": "#2a2f3f",
                "hoverTop": "#4a5060",
                "hoverBottom": "#3a4050",
                "textColor": "#ffffff"
            },
            "persistentButton": {
                "enabled": true,
                "position": "middle-right",
                "action": "activate-tess",
                "gradientTop": "#f8c400",
                "gradientBottom": "#d4a000"
            },
            "branding": {
                "name": "",
                "logo": ""
            }
        },
        "testimonial": {
            "groups": []
        },
        "videoVault": {
            "videos": []
        },
        "smartScreen": {
            "action": "showBestMatch",
            "images": []
        },
        "websiteInfo": {
            "triggers": [],
            "infoType": "navigation",
            "action": "showSmartNavigation"
        },
        "preQualification": {
            "enabled": true,
            "knowledgeBaseScript": "mortgage",
            "triggerPhrase": "secured pre qualification interview",
            "emailSubject": "New Lead: {{name}}",
            "emailTemplate": ""
        }
    },
    "updatedAt": "2026-04-15T20:42:52.000Z"
};

    // ===== TRIGGER PHRASE (from dashboard) =====
    // const TRIGGER_PHRASE = window.BotemiaConfig.modules?.preQualification?.triggerPhrase || "secured pre qualification interview";
    // console.log("🎯 Bridge using trigger phrase:", TRIGGER_PHRASE);

    const TRIGGER_PHRASE = "secured pre qualification interview";

    // =========================================
    // 🍋 AUTO-LOADER: EMAILJS LIBRARY
    // =========================================
    (function() {
        var js = document.createElement("script");
        js.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
        js.onload = function() {
            if (window.emailjs) {
                window.emailjs.init('7-9oxa3UC3uKxtqGM');
                console.log("✅ EmailJS Ready");
            }
        };
        document.head.appendChild(js);
    })();

    const style = document.createElement('style');
    style.textContent = `
        .splash-avatar-container {
            width: 220px; height: 384px; margin: 0 auto 25px;
            border-radius: 20px; overflow: hidden;
            background: #000;
            box-shadow: 0 20px 30px rgba(0,0,0,0.5);
            border: 2px solid rgba(255,255,255,0.1);
            display: flex; align-items: center; justify-content: center;
            position: relative;
        }
        .splash-avatar-container lemon-slice-widget {
            position: absolute;
            top: 50%;
            left: 45%;
            transform: translate(-50%, -50%);
            width: 280px !important;
            height: 400px !important;
            max-width: none !important;
            max-height: none !important;
            border-radius: 18px;
        }
        .splash-card {
            background: radial-gradient(circle at center, #1e4a8a 0%, #0a1a2f 80%);
            border-radius: 48px; padding: 20px 30px 40px 30px;
            max-width: 475px; width: 90%; text-align: center;
            box-shadow: 0 30px 60px rgba(0,0,0,0.6);
            animation: slideUp 0.4s ease;
        }
        .splash-card h1 { color: white; font-size: 2.5rem; margin-bottom: 5px; font-weight: 700; }
        .splash-card h2 { color: rgba(255,255,255,0.9); font-size: 1.2rem; margin-bottom: 20px; font-weight: 300; }
        .button-group { display: flex; gap: 10px; justify-content: center; margin-top: 15px; }
        .primary-btn, .secondary-btn { padding: 12px 20px; border-radius: 40px; font-size: 1rem; font-weight: 600; cursor: pointer; flex: 1; max-width: 200px; border: none; transition: all 0.2s; }
        .primary-btn:hover, .secondary-btn:hover { transform: scale(1.02); }
        .ticker-container {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(90deg, rgba(0,0,0,0.9), rgba(248,196,0,0.2), rgba(0,0,0,0.9));
            backdrop-filter: blur(2px);
            color: #f8c400;
            padding: 6px 0;
            overflow: hidden;
            white-space: nowrap;
            font-size: 13px;
            font-weight: 600;
            text-shadow: 0 1px 2px rgba(0,0,0,0.8);
            z-index: 10;
            pointer-events: none;
            border-top: 2px solid #f8c400;
            border-bottom: none;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.5);
        }
        .ticker-content {
            display: inline-block;
            animation: ticker 25s linear infinite;
            padding-left: 100%;
        }
        @keyframes ticker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        .ticker-item {
            display: inline-block;
            padding: 0 25px;
            color: white;
            font-size: 13px;
            font-weight: 500;
            letter-spacing: 0.5px;
        }
        .ticker-item i {
            margin-right: 8px;
            color: #f8c400;
            font-size: 12px;
            filter: drop-shadow(0 0 3px rgba(248,196,0,0.5));
        }
    `;
    document.head.appendChild(style);

    function createSplashWidget() {
        const widget = document.createElement('lemon-slice-widget');
        
        // 1. Set CLIENT ID
        let clientId = window.BotemiaConfig?.id || "mortgage-assist-demo";
        widget.setAttribute('client-id', clientId);
        widget.clientId = clientId;
        
        // 2. GENERATE & SAVE SESSION ID (Critical for Main Widget)
        const sessionId = 'session-' + crypto.randomUUID();
        window.tessSessionId = sessionId;
        // 3. Set ROOM ID
        widget.setAttribute('room-id', sessionId);
        widget.roomId = sessionId;
        // 4. Set AGENT ID
        widget.setAttribute('agent-id', 'agent_7b0776ef6b855de5');
        widget.agentId = 'agent_7b0776ef6b855de5';
        
        // 5. Set API KEY
        const apiKey = "sk_lemon_Tleyq2zh6NoMpllEHf7mYNRxzIED6YcP";
        widget.setAttribute('api-key', apiKey);
        widget.apiKey = apiKey;
        // 6. Mute & State Settings
        widget.setAttribute('muted', 'true');
        widget.muted = true;
        widget.setAttribute('suppress-audio', 'true');
        widget.setAttribute('initial-state', 'active');
        
        widget.setAttribute('inline', '');
        widget.setAttribute('custom-minimized-width', '280');
        widget.setAttribute('custom-minimized-height', '400');
        widget.setAttribute('hide-ui', '');
        widget.setAttribute('suppress-initial-message', 'true');
        widget.id = 'splash-widget';
        return widget;
    }


    // ===== DYNAMIC PRE-QUALIFICATION SCRIPT (From Supabase) =====
    window.preQualScript = {
        steps: [
            { 
                id: "loanPurpose", 
                type: "choice",
                text: "Tess: What type of loans do you currently offer on your website? Purchase, refinance, or both?",
                question: "Tess: What type of loans do you currently offer on your website? Purchase, refinance, or both?",
                field: "loanPurpose",
                validation: "text",
                options: ["Purchase","Refinance","Both","Not sure"]
            },
            { 
                id: "creditScore", 
                type: "choice",
                text: "Tess: Do you currently capture credit score ranges on your forms?",
                question: "Tess: Do you currently capture credit score ranges on your forms?",
                field: "creditScore",
                validation: "text",
                options: ["Yes","No","Sometimes"]
            },
            { 
                id: "incomeCapture", 
                type: "choice",
                text: "Tess: What about income information? Do your forms ask for annual income?",
                question: "Tess: What about income information? Do your forms ask for annual income?",
                field: "incomeCapture",
                validation: "text",
                options: ["Yes","No","Only sometimes"]
            },
            { 
                id: "currentFormRate", 
                type: "choice",
                text: "Tess: On average, what percentage of visitors complete your current forms?",
                question: "Tess: On average, what percentage of visitors complete your current forms?",
                field: "currentFormRate",
                validation: "text",
                options: ["Less than 20%","20-40%","40-60%","60%+","Not sure"]
            },
            { 
                id: "websiteTraffic", 
                type: "choice",
                text: "Tess: About how many monthly visitors does your website get?",
                question: "Tess: About how many monthly visitors does your website get?",
                field: "websiteTraffic",
                validation: "text",
                options: ["Less than 1","000","1","000-5","000","5","000-10","000","10","000+","Not sure"]
            },
            { 
                id: "step_5", 
                type: "text",
                text: "Tess: Thank you for allowing me to demo how I can pre-qualify your future web visitors. Aside from a form that gets a 70% abandonment rate, I can help you capture up to 5x more leads.",
                question: "Tess: Thank you for allowing me to demo how I can pre-qualify your future web visitors. Aside from a form that gets a 70% abandonment rate, I can help you capture up to 5x more leads.",
                field: "",
                validation: "text",
                options: null
            },
            { 
                id: "scheduledDateTime", 
                type: "text",
                text: "Tess: What date and time works best for your Zoom demo?",
                question: "Tess: What date and time works best for your Zoom demo?",
                field: "scheduledDateTime",
                validation: "text",
                options: null
            },
            { 
                id: "step_7", 
                type: "text",
                text: "Tess: Great! Let me get your contact info to send the Zoom invitation.",
                question: "Tess: Great! Let me get your contact info to send the Zoom invitation.",
                field: "",
                validation: "text",
                options: null
            },
            { 
                id: "fullName", 
                type: "text",
                text: "Tess: What's your full name?",
                question: "Tess: What's your full name?",
                field: "fullName",
                validation: "text",
                options: null
            },
            { 
                id: "email", 
                type: "email",
                text: "Tess: What's your email address? I'll send the Zoom link there.",
                question: "Tess: What's your email address? I'll send the Zoom link there.",
                field: "email",
                validation: "text",
                options: null
            },
            { 
                id: "phone", 
                type: "phone",
                text: "Tess: And your phone number? In case we need to reach you before the demo.",
                question: "Tess: And your phone number? In case we need to reach you before the demo.",
                field: "phone",
                validation: "text",
                options: null
            },
            { 
                id: "step_11", 
                type: "text",
                text: "Tess: Perfect! ✅",
                question: "Tess: Perfect! ✅",
                field: "",
                validation: "text",
                options: null
            },
        ],
        responses: {},
        currentStepIndex: 0,
        active: false,
        
        start: function() {
            console.log("📋 Starting pre-qual script");
            this.active = true;
            this.currentStepIndex = 0;
            this.responses = {};
            return this.getCurrentQuestion();
        },
        
   processResponse: async function(userInput) {
    if (!this.active) return null;
    const currentStep = this.steps[this.currentStepIndex];
    if (!currentStep) {
        await this.sendEmail();
        this.active = false;
        return "Thank you! Your pre-qualification is complete.";
    }
    
    // If it's a message step, just move to next
    if (currentStep.type === "message") {
        this.currentStepIndex++;
        return this.getCurrentQuestion();
    }
    
    // Store the response if it has a field
    if (currentStep.field) {
        this.responses[currentStep.field] = userInput;
        console.log("✅ Stored " + currentStep.field + ": " + userInput);
    }
    
    // Move to next step
    this.currentStepIndex++;
    
    // Check if interview is complete
    if (this.currentStepIndex >= this.steps.length) {
        await this.sendEmail();
        this.active = false;
        return "Thank you! Your pre-qualification is complete.";
    }
    
    return this.getCurrentQuestion();
},
        
        getCurrentQuestion: function() {
            const step = this.steps[this.currentStepIndex];
            if (!step) {
                this.active = false;
                return null;
            }
            return step.question || step.text;
        },
        
        getResults: function() {
            return this.responses;
        }
    };
    class PreQualificationController {
        constructor() {
            this.isActive = false;
            this.script = null;
            this.answers = {};
            this.currentStepIndex = 0;
        }

        startInterview() {
            if (this.isActive) return;
            
            if (!window.preQualScript) {
                console.error("❌ CRITICAL: preQualScript not found!");
                return;
            }
            this.script = window.preQualScript;
            
            this.isActive = true;
            this.currentStepIndex = 0;
            this.answers = {};
            
            console.log("🎯 Starting Pre-Qual Interview (New Format)");
            this.speakCurrentStep();
        }

        handleUserInput(userText) {
            if (!this.isActive || !this.script) return;

            const lowerText = userText.toLowerCase();
            const currentStep = this.script.steps[this.currentStepIndex];
            
            if (currentStep.id === "confirmation" && (lowerText === "no" || lowerText === "no thank you")) {
                console.log("🚪 User declined. Returning to Lemon Slice.");
                this.isActive = false;
                this.speak("No problem. What else can I help you with?");
                return;
            }
            
            if (currentStep.id === "confirmation" && lowerText === "yes") {
                console.log("🔥 FIREWALL ACTIVATED: Seizing control from Lemon Slice.");
                this.answers[currentStep.field] = userText;
                this.currentStepIndex++;
                this.speakCurrentStep();
                return; 
            }
            
            if (currentStep.field) {
                this.answers[currentStep.field] = userText;
                console.log("💾 Saved " + currentStep.field + ": " + userText);
            }
            this.currentStepIndex++;

            if (this.currentStepIndex >= this.script.steps.length) {
                this.finishInterview();
                return;
            }

            this.speakCurrentStep();
        }

        speakCurrentStep() {
            const step = this.script.steps[this.currentStepIndex];
            if (step) {
                const message = step.question || step.text;
                this.speak(message);
            } else {
                console.error("❌ Step not found at index:", this.currentStepIndex);
            }
        }

        finishInterview() {
            this.isActive = false;
            console.log("✅ Interview Complete.");
            this.speak("That is everything! I am generating your pre-qualification letter now.");
            this.sendEmail();
        }

        speak(text) {
            if (!text) return;
            console.log("🤖 Tess says: " + text);
            if (window.mainWidget && typeof window.mainWidget.sendMessage === "function") {
                window.mainWidget.sendMessage(text);
            }
        }

        sendEmail() {
            console.log("📧 Sending dynamic email with collected responses...");
            const data = this.answers;
            
            // Convert all responses to a formatted string for email
            let formattedAnswers = "";
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    formattedAnswers += key + ": " + data[key] + "\n";
                }
            }
            
            // ===== EMAIL 1: TO PROSPECTIVE CLIENT =====
            var prospectiveClientParams = {
                full_name: data.fullName || data.name || "Not provided",
                email: data.email || "Not provided",
                phone: data.phone || data.phoneNumber || "Not provided",
                scheduled_datetime: data.scheduledDateTime || data.dateTime || "Not provided",
                all_answers: formattedAnswers,
                full_json: JSON.stringify(data, null, 2),
                submitted_at: new Date().toLocaleString()
            };
            
            // ===== EMAIL 2: TO WEB PROSPECT =====
            var webProspectParams = {
                full_name: data.fullName || data.name || "Valued Client",
                email: data.email || "Not provided",
                phone: data.phone || data.phoneNumber || "Not provided",
                scheduled_datetime: data.scheduledDateTime || data.dateTime || "Not provided",
                message: "Thank you for completing the pre-qualification! A loan officer will reach out to you shortly."
            };
            
            emailjs.send("service_b9bppgb", "template_uix9cyx", prospectiveClientParams)
                .then(function() {
                    console.log("✅ Dynamic email sent to prospective client");
                })
                .catch(function(error) {
                    console.error("❌ Email error (prospective):", error);
                });
            
            if (data.email) {
                emailjs.send("service_b9bppgb", "template_8kx812d", webProspectParams)
                    .then(function() {
                        console.log("✅ Visitor confirmation email sent to web prospect");
                    })
                    .catch(function(error) {
                        console.error("❌ Email error (visitor):", error);
                    });
            }
        }
    }
    // Expose class to global scope for testing/debugging
    window.PreQualificationController = PreQualificationController;
    // =========================================
    // 🍋 SUPABASE REALTIME SETUP (Corrected Syntax)
    // =========================================
    (function() {
        const SUPABASE_URL = "https://fcgbusobfdwnpoqyuzoe.supabase.co";
        const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjZ2J1c29iZmR3bnBvcXl1em9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNDA2MjMsImV4cCI6MjA4NTkxNjYyM30.FHEZnxuGHSn_Z3gw9d_Txtfz5Jn55J6qonl8rnA3gPk";
        
        // Load Supabase Library dynamically
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
        script.onload = function() {
            // Initialize Supabase Client
            const { createClient } = supabase;
            const sbClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
                realtime: {
                    params: {
                        eventsPerSecond: 10
                    }
                }
            });
            
            const tcsChannel = sbClient.channel("tess-commands");
            
            // Listen for commands
            tcsChannel.on("broadcast", { event: "command" }, function(payload) {
                console.log("📡 [REALTIME] Command received:", payload);
                const command = payload.payload.command;
                
                if (command === "START_PRE_QUAL") {
                    console.log("🎯 [REALTIME] START_PRE_QUAL received!");
                    if (window.preQualController && !window.preQualController.isActive) {
                        window.preQualController.startInterview();
                    }
                }
            });
            
            // Listen for ping and respond with pong
            tcsChannel.on("broadcast", { event: "ping" }, function(payload) {
                console.log("📡 PING received, sending PONG...");
                tcsChannel.send({
                    type: "broadcast",
                    event: "pong",
                    payload: {
                        type: "TEST_PONG",
                        message: "Connection Active!",
                        timestamp: Date.now()
                    }
                });
                console.log("📤 PONG sent to TCS");
            });
            
            // Subscribe to channel
            tcsChannel.subscribe(function(status) {
                if (status === "SUBSCRIBED") {
                    console.log("✅ [REALTIME] Connected to Supabase channel");
                }
            });
            
            window.supabaseChannel = tcsChannel;
            
            // Create health monitor channel
            const healthChannel = sbClient.channel("health-monitor");
            healthChannel.subscribe(function(status) {
                if (status === "SUBSCRIBED") {
                    console.log("🩺 Health monitor channel connected");
                }
            });
            
            window.healthChannel = healthChannel;
            
            // Listen for test_ping
            healthChannel.on("broadcast", { event: "test_ping" }, function(payload) {
                console.log("📡 TEST_PING received, sending PONG...");
                healthChannel.send({
                    type: "broadcast",
                    event: "test_pong",
                    payload: {
                        clientId: window.BotemiaConfig?.id || "unknown",
                        timestamp: Date.now(),
                        echoTimestamp: payload.payload.timestamp
                    }
                });
                console.log("📤 test_pong sent");
            });
        };
        document.head.appendChild(script);
    })();

    // Create controller instance
    window.preQualController = new PreQualificationController();
    if (window.preQualScript) {
        window.preQualController.script = window.preQualScript;
        console.log("✅ Controller created with", window.preQualScript.steps?.length, "steps");
    } else {
        console.error("❌ No preQualScript found!");
    }
    // Function to broadcast Tess's speech to TCS via Supabase
    window.broadcastTessTranscript = function(text) {
        try {
            if (window.supabaseChannel) {
                window.supabaseChannel.send({
                    type: "broadcast",
                    event: "tess_transcript",
                    payload: {
                        type: "TESS_TRANSCRIPT",
                        text: text,
                        timestamp: Date.now()
                    }
                });
                console.log("📡 [SUPABASE] Sent Tess transcript:", text.substring(0, 50));
            } else {
                console.log("⚠️ Supabase channel not ready");
            }
        } catch(e) {
            console.error("❌ Failed to send via Supabase:", e);
        }
    };

    function setupUniversalListener() {
        console.log("👂 Universal Listener Activated (Universal Mode).");
        
        async function initDaily() {
            console.log("📞 Initializing Daily room...");
            try {
                const response = await fetch("https://fcgbusobfdwnpoqyuzoe.supabase.co/functions/v1/create-daily-room", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({})
                });
                const data = await response.json();
                if (data.room_url && data.token) {
                    if (typeof DailyIframe !== "undefined") {
                        dailyCallObject = DailyIframe.createCallObject({ lang: "en-us" });
                        window.dailyCallObject = dailyCallObject;
                        const container = document.getElementById("daily-container");
                        if (container && dailyCallObject.iframe()) { container.appendChild(dailyCallObject.iframe()); }
                        await dailyCallObject.join({ url: data.room_url, token: data.token });
                        console.log("✅ Joined Daily room");
                        
                        dailyCallObject.on("app-message", (ev) => {
                            if (ev?.data?.type === "agent_transcription") {
                                const tessText = ev.data.transcription;
                                console.log("🤖 Tess said:", tessText);
                                
                                if (window.supabaseChannel) {
                                    window.supabaseChannel.send({
                                        type: "broadcast",
                                        event: "tess_transcript",
                                        payload: { text: tessText, timestamp: Date.now() }
                                    });
                                    
                                    window.supabaseChannel.on("broadcast", { event: "test_ping" }, (payload) => {
                                        console.log("📡 TEST_PING received via Supabase, sending PONG...");
                                        window.supabaseChannel.send({
                                            type: "broadcast",
                                            event: "test_pong",
                                            payload: {
                                                clientId: window.BotemiaConfig?.id || "unknown",
                                                timestamp: Date.now(),
                                                echoTimestamp: payload.payload.timestamp
                                            }
                                        });
                                        console.log("📤 test_pong sent");
                                    });
                                }
                                
                                if (tessText.toLowerCase().includes(TRIGGER_PHRASE.toLowerCase())) {
                                    console.log("🎯 EXACT TRIGGER MATCHED:", TRIGGER_PHRASE);
                                    if (window.preQualController && !window.preQualController.isActive) {
                                        window.preQualController.startInterview();
                                    }
                                }
                            }
                        });
                    }
                }
            } catch(e) { console.error("Daily init error:", e); }
        }

    }
    function createMainWidget() {
        const widget = document.createElement('lemon-slice-widget');
        
        // 1. Set AGENT ID
        widget.setAttribute('agent-id', 'agent_7b0776ef6b855de5');
        
        // 2. Set CLIENT ID (Explicitly, to prevent 0)
        let clientId = window.BotemiaConfig?.id || "mortgage-assist-demo";
        widget.setAttribute('client-id', clientId);
        widget.clientId = clientId;
        // 3. Set API KEY (Required for Auth)
        const apiKey = "sk_lemon_Tleyq2zh6NoMpllEHf7mYNRxzIED6YcP";
        widget.setAttribute('api-key', apiKey);
        widget.apiKey = apiKey;
        // 4. Set ROOM ID (Shared Session)
        let sessionId = window.tessSessionId || 'session-' + crypto.randomUUID();
        widget.setAttribute('room-id', sessionId);
        widget.roomId = sessionId;
        // 5. Dimensions & State
        widget.setAttribute('initial-state', 'minimized');
        widget.setAttribute('custom-minimized-width', '144');
        widget.setAttribute('custom-minimized-height', '216');
        widget.id = 'main-widget';
        widget.style.display = 'none';
        
        // 6. Listener
        widget.addEventListener('ready', () => {
            console.log('[Bridge] Main Widget Ready.');
            forceMortgageIntro(widget);
        });
        
        return widget;
    }

    function forceMortgageIntro(widget) {
        console.log("🚀 forceMortgageIntro Triggered");
        
        // 1. Ensure Widget is Active
        widget.setAttribute('controlled-widget-state', 'active');
        
        // 2. Force the Widget to read its attributes (The Handshake)
        try {
            if (typeof widget.initialize === 'function') {
                widget.initialize();
            } else {
                // Fallback: Re-set attributes to trigger internal setters
                const id = widget.getAttribute('client-id');
                const key = widget.getAttribute('api-key');
                widget.setAttribute('client-id', id); 
                widget.setAttribute('api-key', key);
            }
            console.log("✅ Authentication Handshake Forced");
        } catch (e) {
            console.warn("⚠️ Handshake warning:", e);
        }
        
        // 3. Ensure Mic is On
        try { widget.micOn?.(); widget.unmute?.(); } catch(e) {}
        
        const message = "Hi! I'm Tess, your mortgage AI assistant. I'm here to help you with rates, qualification, and finding the right loan program. What's your first name?";
        
        // 4. Send Message with a delay
        setTimeout(() => {
            console.log("🗣️ Sending intro message...");
            try {
                if (typeof widget.sendMessage === 'function') {
                    widget.sendMessage(message);
                    console.log("✅ Message sent successfully");
                } else {
                    console.error("❌ ERROR: sendMessage missing");
                }
            } catch (e) {
                console.error("❌ CRASH: " + e.message);
            }
        }, 1500); // Reduced to 1.5s
    }

    function showSplash() {
        const config = window.BotemiaConfig.modules?.splashScreen;
        if (!config || !config.enabled) return;

        const overlay = document.createElement('div');
        overlay.className = 'splash-overlay';
        overlay.id = 'splashOverlay';
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
            display: flex; align-items: center; justify-content: center; z-index: 99999;
        `;

        const card = document.createElement('div');
        card.className = 'splash-card';
        card.style.background = `radial-gradient(circle at center, ${config.gradientCenter || '#1e4a8a'} 0%, ${config.gradientOuter || '#0a1a2f'} 80%)`;

        let cardHTML = `
            <h1>✨ ${config.title || 'Meet Tess!'} ✨</h1>
            <h2>${config.subtitle || 'Your Personal AI Web Guide'}</h2>
            <div class="splash-avatar-container" id="splashAvatarContainer"></div>
            <div class="button-group">
                <button class="primary-btn" id="activateTessBtn" style="background: linear-gradient(145deg, ${config.primaryButton?.gradientTop || '#f8c400'}, ${config.primaryButton?.gradientBottom || '#d4a000'}); color: ${config.primaryButton?.textColor || '#0a0f1e'};">${config.primaryButton?.text || 'Get AI help with Tess'}</button>
                <button class="secondary-btn" id="justBrowsingBtn" style="background: linear-gradient(145deg, ${config.secondaryButton?.gradientTop || '#3a4050'}, ${config.secondaryButton?.gradientBottom || '#2a2f3f'}); color: ${config.secondaryButton?.textColor || '#ffffff'};">${config.secondaryButton?.text || 'Just Browsing'}</button>
            </div>
        `;

        // Add white footer area with logo - EXACT DIMENSIONS
        cardHTML += `
            <div style="position: relative; width: 475px; left: 50%; transform: translateX(-50%); margin-top: 25px; background: white; border-radius: 0 0 48px 48px; padding: 15px 0; margin-bottom: -40px;">
                <div style="display: flex; align-items: center; justify-content: center; gap: 15px; width: 415px; margin: 0 auto;">
                    ${config.branding?.logo ? '<img src="' + config.branding.logo + '" style="height: 36px; width: auto;">' : ''}
                    ${config.branding?.name ? '<span style="color: #333; font-size: 18px; font-weight: 500;">' + config.branding.name + '</span>' : ''}
                </div>
            </div>
        `;
        card.innerHTML = cardHTML;

        overlay.appendChild(card);
        document.body.appendChild(overlay);

        const container = document.getElementById('splashAvatarContainer');
        const splashWidget = createSplashWidget();
        container.appendChild(splashWidget);

        // Add ticker tape if keywords exist
        const tickerKeywords = config.tickerKeywords;
        if (tickerKeywords) {
            const keywords = tickerKeywords.split(',').map(k => k.trim()).filter(k => k);
            
            if (keywords.length > 0) {
                const tickerContainer = document.createElement('div');
                tickerContainer.className = 'ticker-container';
                
                const tickerContent = document.createElement('div');
                tickerContent.className = 'ticker-content';
                
                // Duplicate keywords for seamless looping
                const allKeywords = [...keywords, ...keywords];
                
                allKeywords.forEach(keyword => {
                    const span = document.createElement('span');
                    span.className = 'ticker-item';
                    span.innerHTML = `<i class="fas fa-star"></i> ${keyword}`;
                    tickerContent.appendChild(span);
                });
                
                tickerContainer.appendChild(tickerContent);
                container.appendChild(tickerContainer);
            }
        }
        document.getElementById('activateTessBtn').addEventListener('click', activateTess);
        document.getElementById('justBrowsingBtn').addEventListener('click', justBrowsing);

        const primaryBtn = document.getElementById('activateTessBtn');
        primaryBtn.onmouseover = () => { primaryBtn.style.background = `linear-gradient(145deg, ${config.primaryButton?.hoverTop || '#ffd700'}, ${config.primaryButton?.hoverBottom || '#e0b000'})`; primaryBtn.style.transform = 'scale(1.02)'; };
        primaryBtn.onmouseout = () => { primaryBtn.style.background = `linear-gradient(145deg, ${config.primaryButton?.gradientTop || '#f8c400'}, ${config.primaryButton?.gradientBottom || '#d4a000'})`; primaryBtn.style.transform = 'scale(1)'; };
        const secondaryBtn = document.getElementById('justBrowsingBtn');
        secondaryBtn.onmouseover = () => { secondaryBtn.style.background = `linear-gradient(145deg, ${config.secondaryButton?.hoverTop || '#4a5060'}, ${config.secondaryButton?.hoverBottom || '#3a4050'})`; secondaryBtn.style.transform = 'scale(1.02)'; };
        secondaryBtn.onmouseout = () => { secondaryBtn.style.background = `linear-gradient(145deg, ${config.secondaryButton?.gradientTop || '#3a4050'}, ${config.secondaryButton?.gradientBottom || '#2a2f3f'})`; secondaryBtn.style.transform = 'scale(1)'; };
    }

    async function forceUnmute() {
        if (window.mainWidget) {
            // 1. API Calls
            try {
                await window.mainWidget.micOn?.();
                await window.mainWidget.unmute?.();
            } catch(e) {
                console.warn("Force unmute API error", e);
            }
            // 2. Nuclear Shadow DOM Unmute
            try {
                const shadow = window.mainWidget.shadowRoot;
                if (shadow) {
                    const v = shadow.querySelector('video');
                    const a = shadow.querySelector('audio');
                    if (v) { v.muted = false; v.volume = 1.0; v.play(); }
                    if (a) { a.muted = false; a.volume = 1.0; a.play(); }
                }
            } catch(e) {}
        }
    }

    // ===== ACTIVATE TESS FUNCTION (WITH DAILY INTEGRATION ADDED) =====
    async function activateTess() {
        console.log("🖱️ Click detected: Capturing user gesture for audio...");
        
        // 1. Try to pre-warm audio
        try {
            if (window.mainWidget && typeof window.mainWidget.micOn === "function") {
                window.mainWidget.micOn();
            }
        } catch(e) { console.warn("Audio pre-check:", e); }

        
        // 2. NUKE THE SPLASH WIDGET
        const splashWidget = document.getElementById('splash-widget');
        if (splashWidget) {
            splashWidget.innerHTML = '';
            if (splashWidget.parentNode) {
                splashWidget.parentNode.removeChild(splashWidget);
            }
        }

        // 3. Remove the overlay
        const overlay = document.getElementById('splashOverlay');
        if (overlay) overlay.remove();

        // 4. CREATE MAIN WIDGET (KEEP EXISTING)
        setTimeout(() => {
            if (!window.mainWidget || !document.body.contains(window.mainWidget)) {
                window.mainWidget = createMainWidget();
                window.mainWidget.setAttribute('hide-ui', 'true');
                document.body.appendChild(window.mainWidget);
            }
            
            window.mainWidget.style.display = 'block';
            window.mainWidget.setAttribute('controlled-widget-state', 'active');
            
            // 5. Activate Audio (KEEP EXISTING)
            setTimeout(async () => {
                console.log("🎤 Finalizing audio state...");
                try {
                    if (window.mainWidget && typeof window.mainWidget.micOn === 'function') {
                        await window.mainWidget.micOn();
                        await window.mainWidget.unmute?.();      
                        console.log("✅ Microphone activated");
                        await forceUnmute();
                    }
                } catch (e) {
                    console.error("❌ Mic activation failed:", e);
                    forceUnmute();
                }
            }, 3000);
        }, 100);
        
        // 🔥 NEW: ALSO START DAILY SESSION IN BACKGROUND
        // This runs alongside the widget for transcription events
        // startTessSession(); // REMOVED - Using initDaily instead
        if (typeof initDaily === "function") { initDaily(); }
        
        // Expose activateTess globally for button clicks (MOVED TO BOTTOM)
        window.activateTess = activateTess;
    }

    function showPersistentAvatar() {
        const config = window.BotemiaConfig.modules?.splashScreen;
        const persistentConfig = config?.persistentButton || {};
        
        // Get position from config
        const position = persistentConfig.position || 'bottom-left';
        console.log("📌 Avatar position from config:", position);
        
        // Remove existing avatar button if any
        const existingBtn = document.getElementById('persistent-avatar-btn');
        if (existingBtn) existingBtn.remove();
        
        // Create avatar button
        const avatarBtn = document.createElement('div');
        avatarBtn.id = 'persistent-avatar-btn';
        
        // Apply position based on dropdown selection
        let positionStyles = '';
        
        switch(position) {
            case 'bottom-left':
                positionStyles = 'bottom: 20px; left: 20px;';
                break;
            case 'bottom-right':
                positionStyles = 'bottom: 20px; right: 20px;';
                break;
            case 'middle-left':
                positionStyles = 'top: 50%; left: 20px; transform: translateY(-50%);';
                break;
            case 'middle-right':
                positionStyles = 'top: 50%; right: 20px; transform: translateY(-50%);';
                break;
            default:
                positionStyles = 'bottom: 20px; left: 20px;';
        }
        
        // Style the avatar button - with !important to override page CSS
        avatarBtn.style.cssText = `
            position: fixed !important;
            ${positionStyles.replace(/;/g, ' !important;')}
            width: 180px !important;
            height: 180px !important;
            border-radius: 50% !important;
            background: linear-gradient(135deg, ${persistentConfig.gradientTop || '#f8c400'} 0%, ${persistentConfig.gradientBottom || '#d4a000'} 100%) !important;
            cursor: pointer !important;
            z-index: 999999 !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            overflow: hidden !important;
            transition: transform 0.3s ease !important;
        `;
        
        // DEBUG: Check if styles were applied
        console.log("Applied position styles:", {
            bottom: avatarBtn.style.bottom,
            left: avatarBtn.style.left,
            top: avatarBtn.style.top,
            right: avatarBtn.style.right,
            position: avatarBtn.style.position
        });
        
        // Check for video URL first
        const tessVideoUrl = config?.tessVideoUrl;
        
        if (tessVideoUrl) {
            // Create video element for talking avatar
            const video = document.createElement('video');
            video.src = tessVideoUrl;
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            // Get video fit setting from config
            const videoFit = config?.tessVideoFit || 'cover';
            video.style.cssText = `
                width: 180px;
                height: 180px;
                object-fit: ${videoFit};
                border: none;
                pointer-events: none;
            `;
            avatarBtn.appendChild(video);
            
            // Add "Ask Tess 👆" text overlay at bottom
            const textOverlay = document.createElement('div');
            textOverlay.style.cssText = `
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                color: #f8c400;
                text-align: center;
                padding: 15px 5px 8px 5px;
                font-size: 18px;
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 4px;
                pointer-events: none;
            `;
            textOverlay.innerHTML = `Ask Tess <span style="font-size: 20px;">👆</span>`;
            avatarBtn.appendChild(textOverlay);
            
        } else {
            // Fallback to image if no video
            const tessImage = config?.tessImage;
            if (tessImage) {
                avatarBtn.innerHTML = `<img src="${tessImage}" style="width: 170px; height: 170px; border-radius: 50%; object-fit: cover; border: 3px solid white;">`;
            } else {
                // Fallback icon
                avatarBtn.innerHTML = `<i class="fas fa-user-circle" style="font-size: 140px; color: white;"></i>`;
            }
        }
        // ===== END REPLACEMENT =====
        
        // Add hover effect
        avatarBtn.addEventListener('mouseenter', () => {
            avatarBtn.style.transform = 'scale(1.1)';
        });
        avatarBtn.addEventListener('mouseleave', () => {
            avatarBtn.style.transform = 'scale(1)';
        });
        
        // Click handler
        avatarBtn.addEventListener('click', () => {
            console.log("🖱️ Avatar button clicked - activating Tess");
            avatarBtn.remove();
            activateTess();
        });
        
        document.body.appendChild(avatarBtn);
        console.log(`✅ Avatar button created at ${position}`);
    }

    function justBrowsing() {
        console.log("👆 Just Browsing clicked - showing persistent avatar");
        
        // Remove splash screen elements
        const overlay = document.getElementById('splashOverlay');
        if (overlay) overlay.remove();

        const splashWidget = document.getElementById('splash-widget');
        if (splashWidget) splashWidget.remove();

        
        // Get splash config for persistent button settings
        const config = window.BotemiaConfig.modules?.splashScreen;
        if (config?.persistentButton?.enabled) {
            // Show persistent avatar button
            showPersistentAvatar();
        } else {
            // Fallback to showing main widget directly
            if (!window.mainWidget || !document.body.contains(window.mainWidget)) {
                window.mainWidget = createMainWidget();
                document.body.appendChild(window.mainWidget);
            }
            window.mainWidget.style.display = 'block';
        }
    }

    window.disableBridgeTriggers = false;

    function initWidget() {
        if (document.querySelector('lemon-slice-widget')) { console.log('✅ Widget already exists'); return; }
        
        // 1. Load the Script
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@lemonsliceai/lemon-slice-widget';
        script.type = 'module';
        script.onload = () => { 
            console.log('✅ Widget script loaded');
            // TCS Auto-launch removed
        }; 
        script.onerror = () => console.error('❌ Failed to load widget');
        document.head.appendChild(script);
        
        // 2. Create Splash Widget
        setTimeout(() => { showSplash(); }, 100);
    }

    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initWidget); }
    else { initWidget(); }

    console.log('✅ Botemia Bridge v5.4 loaded for', window.BotemiaConfig.name);

    let dailyCallObject = null;
    let dailyRoomData = null;

    // Load Daily SDK
    function loadDailySDK() {
        return new Promise((resolve, reject) => {
            if (typeof DailyIframe !== "undefined") {
                resolve();
                return;
            }
            const script = document.createElement("script");
            script.src = "https://unpkg.com/@daily-co/daily-js";
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // ===== CLIENT ANNOUNCEMENT FUNCTION =====
    function announceToTCS() {
        // Send via opener (direct window communication)
        if (window.opener) {
            window.opener.postMessage({
                type: 'BRIDGE_ACTIVE',
                clientId: window.BotemiaConfig.id,
                url: window.location.href
            }, '*');
        }
        
        // Send via Supabase Realtime (cross-domain)
        if (window.supabaseChannel) {
            window.supabaseChannel.send({
                type: 'broadcast',
                event: 'client_info',
                payload: {
                    type: 'CLIENT_INFO',
                    clientId: window.BotemiaConfig.id,
                    url: window.location.href,
                    timestamp: Date.now()
                }
            });
            console.log('📢 Announced to TCS via Supabase Realtime');
        } else {
            console.log('⚠️ Supabase channel not ready yet');
        }
    }

    setTimeout(announceToTCS, 2000);
})();
