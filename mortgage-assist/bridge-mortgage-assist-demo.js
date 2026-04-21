// Botemia Bridge for Mortgage Assist Demo
// Generated: 4/17/2026, 12:11:24 AM
// Client ID: mortgage-assist-demo
// Version: 5.5 - FIX FOR SKIPPING ISSUE

(function() {
    "use strict";

    // ===== GLOBAL VARIABLES =====
    let isPreQualificationActive = false;
    window.preQualController = null;

    // ===== EMBEDDED CLIENT CONFIGURATION =====
    window.BotemiaConfig = {
        "id": "mortgage-assist-demo",
        "name": "Mortgage Assist Demo",
        "websiteUrl": "https://client-tester.netlify.app/mortgage-assist/",
        "agentId": "agent_7b0776ef6b855de5",
        "modules": {
            "preQualification": {
                // 🍋 PRIMARY TRIGGER: Only starts when user EXPLICITLY agrees
                "triggerPhrase": "YES_INITIATE_PREQUAL", 
                // Legacy backup (optional, but leaving it won't hurt if KB is fixed)
                "triggerPhraseLegacy": "let's get started"
            },
            "splashScreen": {"enabled":true,"agentId":"agent_7b0776ef6b855de5","title":"Meet Tess","subtitle":"Your Personal AI Smart Guide","tessVideoUrl":"https://fcgbusobfdwnpoqyuzoe.supabase.co/storage/v1/object/sign/processed-videos/tess-button.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjJjNGVkZS0wYzRiLTQyMzAtOGE5MC1jMDhmNjhlNDVkNTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9jZXNzZWQtdmlkZW9zL3Rlc3QtYnV0dG9uLm1wNCIsImlhdCI6MTc3MzgwNDA4MSwiZXhwIjoxODA1MzQwMDgxfQ.07K0XCnTt3zAZPp2ZAgZ-SzYhZj6nW1Vun8WW-zDAVQ","tessVideoFit":"cover","tickerKeywords":"Mortgage Rates, Pre-Qualification, First-Time Buyer, Refinance, FHA Loans","gradientCenter":"#1e4a8a","gradientOuter":"#0a1f3f","primaryButton":{"text":"Get AI help with Tess","gradientTop":"#f8c400","gradientBottom":"#d4a000","hoverTop":"#ffd700","hoverBottom":"#e0b000","textColor":"#0a0f1e"},"secondaryButton":{"text":"Just Browsing","gradientTop":"#3a4050","gradientBottom":"#2a2f3f","hoverTop":"#4a5060","hoverBottom":"#3a4050","textColor":"#ffffff"},"persistentButton":{"enabled":true,"position":"middle-right","action":"activate-tess","gradientTop":"#f8c400","gradientBottom":"#d4a000"},"branding":{"name":"","logo":""}}
        }
    };

    // ===== TRIGGER PHRASE (from dashboard) =====
    // We check the new specific phrase first
    window.TRIGGER_PHRASE = window.BotemiaConfig.modules?.preQualification?.triggerPhrase;
    if (!window.TRIGGER_PHRASE) {
        console.error("❌ CRITICAL: No trigger phrase configured in dashboard!");
    } else {
        console.log("🎯 Bridge using trigger phrase:", window.TRIGGER_PHRASE);
    }

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
        let clientId = window.BotemiaConfig?.id || "mortgage-assist-demo";
        widget.setAttribute('client-id', clientId);
        widget.clientId = clientId;
        const sessionId = 'session-' + crypto.randomUUID();
        window.tessSessionId = sessionId;
        widget.setAttribute('room-id', sessionId);
        widget.roomId = sessionId;
        widget.setAttribute('agent-id', 'agent_7b0776ef6b855de5');
        widget.agentId = 'agent_7b0776ef6b855de5';
        const apiKey = "sk_lemon_Tleyq2zh6NoMpllEHf7mYNRxzIED6YcP";
        widget.setAttribute('api-key', apiKey);
        widget.apiKey = apiKey;
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

    // ===== DYNAMIC PRE-QUALIFICATION SCRIPT =====
    window.preQualScript = {
        steps: [
            { id: "loanType", type: "choice", text: "Tess: What type of loan are you looking for? For example, FHA, VA, Conventional, or USDA?", question: "Tess: What type of loan are you looking for?", field: "loanType", validation: "text", options: ["FHA","VA (Veterans)","Conventional","USDA","Other/Not Sure"] },
            { id: "monthlyIncome", type: "currency", text: "Tess: What is your total gross monthly income?", question: "Tess: What is your total gross monthly income?", field: "monthlyIncome", validation: "text", options: null },
            { id: "employmentHistory", type: "choice", text: "Tess: How long have you been at your current employer?", question: "Tess: How long have you been at your current employer?", field: "employmentHistory", validation: "text", options: ["Less than 1 year","1-2 years","3-5 years","5+ years"] },
            { id: "downPayment", type: "choice", text: "Tess: How much do you plan on putting down?", question: "Tess: How much do you plan on putting down?", field: "downPayment", validation: "text", options: ["Less than 3%","3-5%","5-10%","10-20%","20%+"] },
            { id: "creditScore", type: "choice", text: "Tess: What is your estimated credit score?", question: "Tess: What is your estimated credit score?", field: "creditScore", validation: "text", options: ["Excellent (740+)","Good (700-739)","Fair (620-699)","Challenged (below 620)","Not sure"] },
            { id: "step_5", type: "message", text: "Tess: [Name], as you can see as your website mortgage assistant...", question: "Tess: [Name]...", field: "", validation: "text", options: null },
            { id: "zoomInterest", type: "choice", text: "Tess: Would you be interested in a free Zoom meeting?", question: "Tess: Would you be interested in a free Zoom meeting?", field: "zoomInterest", validation: "text", options: ["Yes","No"] },
            { id: "fullName", type: "text", text: "Tess: Perfect! Can I start with your full name?", question: "Tess: Perfect! Can I start with your full name?", field: "fullName", validation: "text", options: null },
            { id: "scheduledDateTime", type: "text", text: "Tess: And when would be the best date and time for a Zoom meeting?", question: "Tess: And when would be the best date and time?", field: "scheduledDateTime", validation: "text", options: null },
            { id: "email", type: "email", text: "Tess: Perfect! And what email address can I send your confirmation to?", question: "Tess: And what email address?", field: "email", validation: "text", options: null },
            { id: "phone", type: "phone", text: "Tess: And may I get your phone number please?", question: "Tess: And may I get your phone number please?", field: "phone", validation: "text", options: null },
            { id: "specialRequests", type: "text", text: "Tess: Do you have any special requests?", question: "Tess: Do you have any special requests?", field: "specialRequests", validation: "text", options: null },
            { id: "step_12", type: "message", text: "Tess: Excellent! Your confirmation has been sent.", question: "Tess: Excellent! Your confirmation has been sent.", field: "", validation: "text", options: null }
        ],
        responses: {}, currentStepIndex: 0, active: false,
        start: function() { this.active = true; this.currentStepIndex = 0; this.responses = {}; return this.getCurrentQuestion(); },
        processResponse: async function(userInput) {
            if (!this.active) return null;
            const currentStep = this.steps[this.currentStepIndex];
            if (!currentStep) { await this.sendEmail(); this.active = false; return "Thank you! Your pre-qualification is complete."; }
            if (currentStep.type === "message") { this.currentStepIndex++; return this.getCurrentQuestion(); }
            if (currentStep.field) { this.responses[currentStep.field] = userInput; }
            this.currentStepIndex++;
            if (this.currentStepIndex >= this.steps.length) { await this.sendEmail(); this.active = false; return "Thank you! Your pre-qualification is complete."; }
            return this.getCurrentQuestion();
        },
        getCurrentQuestion: function() { const step = this.steps[this.currentStepIndex]; return step ? (step.question || step.text) : null; },
        getResults: function() { return this.responses; }
    };

    class PreQualificationController {
        constructor() { this.isActive = false; this.script = null; this.answers = {}; this.currentStepIndex = 0; }
        startInterview() {
            if (this.isActive) return;
            if (!window.preQualScript) { console.error("❌ CRITICAL: preQualScript not found!"); return; }
            this.script = window.preQualScript;
            this.isActive = true;
            this.currentStepIndex = 0;
            this.answers = {};
            console.log("🎯 Starting Pre-Qual Interview");
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
            if (currentStep.field) { this.answers[currentStep.field] = userText; console.log("💾 Saved " + currentStep.field + ": " + userText); }
            this.currentStepIndex++;
            if (this.currentStepIndex >= this.script.steps.length) { this.finishInterview(); return; }
            this.speakCurrentStep();
        }
        speakCurrentStep() {
            const step = this.script.steps[this.currentStepIndex];
            if (step) { this.speak(step.question || step.text); } else { console.error("❌ Step not found at index:", this.currentStepIndex); }
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
            if (window.mainWidget) {
                if (typeof window.mainWidget.sendMessage === "function") { window.mainWidget.sendMessage(text); }
                window.mainWidget.setAttribute('message', text);
                window.mainWidget.dispatchEvent(new CustomEvent('lemon-slice-message', { detail: { message: text, type: 'agent_response' } }));
            }
        }
        sendEmail() {
            console.log("📧 Sending dynamic email...");
            const data = this.answers;
            let formattedAnswers = "";
            for (var key in data) { if (data.hasOwnProperty(key)) formattedAnswers += key + ": " + data[key] + "\n"; }
            var params = { full_name: data.fullName || "Not provided", email: data.email || "Not provided", phone: data.phone || "Not provided", scheduled_datetime: data.scheduledDateTime || "Not provided", all_answers: formattedAnswers };
            emailjs.send("service_b9bppgb", "template_uix9cyx", params).then(() => console.log("✅ Dynamic email sent")).catch(e => console.error("❌ Email error:", e));
        }
    }
    window.PreQualificationController = PreQualificationController;

        // =========================================
    // 🍋 SUPABASE REALTIME SETUP (ASYNC SAFE)
    // =========================================
    (function() {
        const SUPABASE_URL = "https://fcgbusobfdwnpoqyuzoe.supabase.co";
        const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjZ2J1c29iZmR3bnBvcXl1em9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzNDA2MjMsImV4cCI6MjA4NTkxNjYyM30.FHEZnxuGHSn_Z3gw9d_Txtfz5Jn55J6qonl8rnA3gPk";
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
        
        // ✅ FIX: We only run Supabase code AFTER library is fully loaded
        script.onload = function() {
            const { createClient } = supabase; // Safe to destructure here
            const sbClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
                realtime: {
                    params: {
                        eventsPerSecond: 10
                    }
                }
            });
            
            const tcsChannel = sbClient.channel("tess-commands");
            
            tcsChannel.on("broadcast", { event: "command" }, function(payload) {
                console.log("📡 [REALTIME] Command received:", payload);
                
                // ✅ CRITICAL FIX: Safety Gate
                if (payload.payload.command === "START_PRE_QUAL") {
                    if (typeof window.dailyCallObject === "undefined" || !window.dailyCallObject) {
                        console.warn("⚠️ Dashboard ignored: Daily not ready yet.");
                        return;
                    }
                    forcePreQualification();
                }
            });
            
            tcsChannel.subscribe(function(status) { if (status === "SUBSCRIBED") console.log("✅ [REALTIME] Connected to Supabase"); });
            window.supabaseChannel = tcsChannel;
        };
        
        document.head.appendChild(script);
    })();

    window.preQualController = new PreQualificationController();

    window.broadcastTessTranscript = function(text) {
        if (window.supabaseChannel) {
            window.supabaseChannel.send({ type: 'broadcast', event: 'tess_transcript', payload: { type: 'TESS_TRANSCRIPT', text: text, timestamp: Date.now() } });
        }
    };

    // ==========================================
    // 🍋 DAILY SDK & INIT
    // ==========================================
    function loadDailySDK() {
        return new Promise((resolve, reject) => {
            if (typeof DailyIframe !== "undefined") { resolve(); return; }
            const script = document.createElement("script");
            script.src = "https://unpkg.com/@daily-co/daily-js";
            script.onload = resolve; script.onerror = reject;
            document.head.appendChild(script);
        });
    }

       // ==========================================
    // 🍋 EXTRACTED: DAILY INITIALIZATION (FIXED)
    // ==========================================
    
       async function initDaily() {
        console.log("📞 initDaily: Starting process...");

        let dailyCallObject = null;
        
        // 1. AGGRESSIVE WAIT: Ensure SDK is loaded
        if (typeof DailyIframe === "undefined") {
            console.log("⏳ Daily SDK missing. Loading & Waiting...");
            try {
                await loadDailySDK();
                if (typeof DailyIframe === "undefined") {
                    console.error("❌ Failed to load Daily SDK after waiting.");
                    return;
                }
            } catch (e) {
                console.error("❌ Error loading Daily SDK:", e);
                return;
            }
        }

        console.log("✅ Daily SDK loaded. Creating room...");
        try {
            const response = await fetch("https://fcgbusobfdwnpoqyuzoe.supabase.co/functions/v1/create-daily-room", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({})
            });
            const data = await response.json();
            
            if (data.room_url && data.token) {
                dailyCallObject = DailyIframe.createCallObject({ lang: "en-us" });
                window.dailyCallObject = dailyCallObject;
                
                // Create hidden container if not exists
                let container = document.getElementById("daily-container");
                if (!container) {
                    container = document.createElement('div');
                    container.id = 'daily-container';
                    container.style.display = 'none';
                    document.body.appendChild(container);
                }
                
                if (dailyCallObject.iframe()) { 
                    container.appendChild(dailyCallObject.iframe()); 
                }
                
                await dailyCallObject.join({ url: data.room_url, token: data.token });
                console.log("✅ Joined Daily room (Server Connection Active)");
                
                // ===== 🎧 CLEAN AUDIO LISTENER =====
                dailyCallObject.on("app-message", (ev) => {
                    
                    // 🔥 SILENCE DEFAULT AI WHEN CONTROLLER IS ACTIVE
                    if (window.preQualController && window.preQualController.isActive && ev?.data?.type === "agent_transcription") {
                        console.log("🚫 Silencing default AI - controller is active");
                        return;
                    }
                    
                    if (ev?.data?.type === "agent_transcription") {
                        const tessText = ev.data.transcription;
                        console.log("🤖 [DAILY] Tess said:", tessText);
                        
                        // Broadcast to Supabase
                        if (window.supabaseChannel) {
                            window.supabaseChannel.send({
                                type: "broadcast",
                                event: "tess_transcript",
                                payload: { text: tessText, timestamp: Date.now() }
                            });
                        }
                        
                        // ===== 🔥 NEW: FUZZY TRIGGER LOGIC =====
                        // We check if ANY of these keywords appear in her sentence
                        const fuzzyTriggers = [
                            "ready to begin", 
                            "first question", 
                            "begin with the first", 
                            "start the interview",
                            "YES_INITIATE_PREQUAL" // Keep exact match as backup
                        ];
                        
                        const lowerText = tessText.toLowerCase();
                        
                        // Check if she contains ANY of the trigger phrases
                        const hasTrigger = fuzzyTriggers.some(trigger => lowerText.includes(trigger));
                        
                        if (hasTrigger) {
                            console.log("🎯 TRIGGER DETECTED (Fuzzy Match)! Starting pre-qualification...");
                            // Log WHICH specific keyword triggered it
                            const foundTrigger = fuzzyTriggers.find(trigger => lowerText.includes(trigger));
                            console.log("🔥 Triggered by keyword:", foundTrigger); 
                            
                            // ✅ FIX: SAFETY GATE (Prevents crash if Daily isn't fully ready)
                            if (!window.dailyCallObject) {
                                console.warn("⚠️ Daily Call Object not ready. Aborting trigger.");
                                return;
                            }

                            // Delay to let Tess finish speaking naturally
                            setTimeout(function() {
                                forcePreQualification();
                            }, 3500);
                        }
                    }
                });
            } else {
                console.warn("⚠️ Daily API did not return room_url");
            }
        } catch(e) { 
            console.error("❌ Daily init error:", e); 
        }
    }

    function setupUniversalListener() {
        console.log("👂 Universal Listener Activated.");
        window.addEventListener("message", (event) => {
            if (!event.data || !event.data.type) return;
            if (event.data.type === "START_PRE_QUAL") {
                console.log("🎯 START_PRE_QUAL received!");
                if (window.preQualController && !window.preQualController.isActive) window.preQualController.startInterview();
            }
            if ((event.data.type === "transcript" || event.data.type === "ai_response") && event.data.text) {
                if (window.preQualController && window.preQualController.isActive) window.preQualController.handleUserInput(event.data.text);
            }
        });
    }
    window.initDaily = initDaily;
    setupUniversalListener();

    function createMainWidget() {
        const widget = document.createElement('lemon-slice-widget');
        widget.setAttribute('agent-id', 'agent_7b0776ef6b855de5');
        let clientId = window.BotemiaConfig?.id || "mortgage-assist-demo";
        widget.setAttribute('client-id', clientId);
        widget.clientId = clientId;
        const apiKey = "sk_lemon_Tleyq2zh6NoMpllEHf7mYNRxzIED6YcP";
        widget.setAttribute('api-key', apiKey);
        widget.apiKey = apiKey;
        let sessionId = window.tessSessionId || 'session-' + crypto.randomUUID();
        widget.setAttribute('room-id', sessionId);
        widget.roomId = sessionId;
        widget.setAttribute('initial-state', 'minimized');
        widget.setAttribute('custom-minimized-width', '144');
        widget.setAttribute('custom-minimized-height', '216');
        widget.id = 'main-widget';
        widget.style.display = 'none';
        return widget;
    }

    function forcePreQualification() {
        console.log("🚀 forcePreQualification - Starting pre-qualification interview");
        if (isPreQualificationActive) return;
        if (!window.preQualController) return;
        window.preQualController.script = window.preQualScript;
        window.preQualController.startInterview();
        isPreQualificationActive = true;
    }

    function showSplash() {
        const config = window.BotemiaConfig.modules?.splashScreen;
        if (!config || !config.enabled) return;
        const overlay = document.createElement('div');
        overlay.className = 'splash-overlay';
        overlay.id = 'splashOverlay';
        overlay.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 99999;`;
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
            <div style="position: relative; width: 475px; left: 50%; transform: translateX(-50%); margin-top: 25px; background: white; border-radius: 0 0 48px 48px; padding: 15px 0; margin-bottom: -40px;">
                <div style="display: co-flex; align-items: center; justify-content: center; gap: 15px; width: 415px; margin: 0 auto;">
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

        if (config.tickerKeywords) {
            const keywords = config.tickerKeywords.split(',').map(k => k.trim()).filter(k => k);
            if (keywords.length > 0) {
                const tickerContainer = document.createElement('div');
                tickerContainer.className = 'ticker-container';
                const tickerContent = document.createElement('div');
                tickerContent.className = 'ticker-content';
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
        secondaryBtn.onmouseout = () => { secondaryBtn.style.background = `linear-gradient(145deg, ${config.secondaryButton?.gradientTop || '#3a4050'}, ${config.secondaryButton?.hoverBottom || '#2a2f3f'})`; secondaryBtn.style.transform = 'scale(1)'; };
    }

    async function activateTess() {
        console.log("🖱️ Click detected: Capturing user gesture for audio...");
        const splashWidget = document.getElementById('splash-widget');
        if (splashWidget) { splashWidget.innerHTML = ''; if (splashWidget.parentNode) splashWidget.parentNode.removeChild(splashWidget); }
        const overlay = document.getElementById('splashOverlay');
        if (overlay) overlay.remove();

        setTimeout(() => {
            if (!window.mainWidget || !document.body.contains(window.mainWidget)) {
                window.mainWidget = createMainWidget();
                window.mainWidget.setAttribute('hide-ui', 'true');
                document.body.appendChild(window.mainWidget);
            }
            window.mainWidget.style.display = 'block';
            window.mainWidget.setAttribute('controlled-widget-state', 'active');
            setTimeout(async () => {
                console.log("🎤 Finalizing audio state...");
                try { if (window.mainWidget && typeof window.mainWidget.micOn === 'function') { await window.mainWidget.micOn(); await window.mainWidget.unmute?.(); } } catch(e) { console.error("❌ Mic activation failed:", e); }
            }, 3000);
        }, 100);
        if (typeof initDaily === "function") { initDaily(); }
        window.activateTess = activateTess;
    }

    function showPersistentAvatar() {
        const config = window.BotemiaConfig.modules?.splashScreen;
        const persistentConfig = config?.persistentButton || {};
        const position = persistentConfig.position || 'bottom-left';
        
        const existingBtn = document.getElementById('persistent-avatar-btn');
        if (existingBtn) existingBtn.remove();
        
        const avatarBtn = document.createElement('div');
        avatarBtn.id = 'persistent-avatar-btn';
        
        let positionStyles = '';
        if(position === 'bottom-left') positionStyles = 'bottom: 20px; left: 20px;';
        else if(position === 'bottom-right') positionStyles = 'bottom: 20px; right: 20px;';
        else if(position === 'middle-left') positionStyles = 'top: 50%; left: 20px; transform: translateY(-50%);';
        else if(position === 'middle-right') positionStyles = 'top: 50%; right: 20px; transform: translateY(-50%);';

        avatarBtn.style.cssText = `position: fixed !important; ${positionStyles.replace(/;/g, ' !important;')} width: 180px !important; height: 180px !important; border-radius: 50% !important; background: linear-gradient(135deg, ${persistentConfig.gradientTop || '#f8c400'} 0%, ${persistentConfig.gradientBottom || '#d4a000'} 100%) !important; cursor: pointer !important; z-index: 999999 !important; box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important; display: flex !important; align-items: center !important; justify-content: center !important; overflow: hidden !important; transition: transform 0.3s ease !important;`;
        
        const tessVideoUrl = config?.tessVideoUrl;
        if (tessVideoUrl) {
            const video = document.createElement('video');
            video.src = tessVideoUrl;
            video.autoplay = true; video.loop = true; video.muted = true; video.playsInline = true;
            const videoFit = config?.tessVideoFit || 'cover';
            video.style.cssText = `width: 180px; height: 180px; object-fit: ${videoFit}; border: none; pointer-events: none;`;
            avatarBtn.appendChild(video);
            const textOverlay = document.createElement('div');
            textOverlay.style.cssText = `position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: #f8c400; text-align: center; padding: 15px 5px 8px 5px; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center; gap: 4px; pointer-events: none;`;
            textOverlay.innerHTML = `Ask Tess <span style="font-size: 20px;">👆</span>`;
            avatarBtn.appendChild(textOverlay);
        }
        avatarBtn.addEventListener('mouseenter', () => { avatarBtn.style.transform = 'scale(1.1)'; });
        avatarBtn.addEventListener('mouseleave', () => { avatarBtn.style.transform = 'scale(1)'; });
        avatarBtn.addEventListener('click', () => { avatarBtn.remove(); activateTess(); });
        document.body.appendChild(avatarBtn);
    }

    function justBrowsing() {
        console.log("👆 Just Browsing clicked - showing persistent avatar");
        const overlay = document.getElementById('splashOverlay');
        if (overlay) overlay.remove();
        const splashWidget = document.getElementById('splash-widget');
        if (splashWidget) splashWidget.remove();
        const config = window.BotemiaConfig.modules?.splashScreen;
        if (config?.persistentButton?.enabled) { showPersistentAvatar(); }
        else {
            if (!window.mainWidget || !document.body.contains(window.mainWidget)) { window.mainWidget = createMainWidget(); document.body.appendChild(window.mainWidget); }
            window.mainWidget.style.display = 'block';
        }
    }

    window.disableBridgeTriggers = false;
    function initWidget() {
        if (document.querySelector('lemon-slice-widget')) { console.log('✅ Widget already exists'); return; }
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@lemonsliceai/lemon-slice-widget';
        script.type = 'module';
        script.onload = () => { console.log('✅ Widget script loaded'); };
        script.onerror = () => console.error('❌ Failed to load widget');
        document.head.appendChild(script);
        setTimeout(() => { showSplash(); }, 100);
    }
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initWidget); } else { initWidget(); }
    console.log('✅ Botemia Bridge v5.5 loaded for', window.BotemiaConfig.name);
    
    // ===== CLIENT ANNOUNCEMENT =====
    function announceToTCS() {
        if (window.supabaseChannel) {
            window.supabaseChannel.send({ type: 'broadcast', event: 'client_info', payload: { type: 'CLIENT_INFO', clientId: window.BotemiaConfig.id, url: window.location.href, timestamp: Date.now() } });
        }
    }
    setTimeout(announceToTCS, 2000);
})();
