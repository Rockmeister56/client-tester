// Botemia Bridge for Mortgage Assist Demo
// Generated: 4/27/2026, 11:54:53 AM
// Client ID: mortgage-assist-demo
// Version: 5.8 - LISTENER MODE (FINAL)

(function() {
    "use strict";

    // ===== GLOBAL VARIABLES =====
    let isPreQualificationActive = false;
    window.preQualController = null;
    let dailyCallObject = null;

    // ===== EMBEDDED CLIENT CONFIGURATION =====
    window.BotemiaConfig = {
        "id": "mortgage-assist-demo",
        "name": "Mortgage Assist Demo",
        "websiteUrl": "https://client-tester.netlify.app/mortgage-assist/?clientId=mortgage-assist-demo",
        "agentId": "agent_7b0776ef6b855de5",
        "modules": {
            "preQualification": {
                "triggerPhrase": "let's get started",
                "triggerPhraseLegacy": "let's get started"
            },
            "emailConfig": {"loanOfficerEmail":"mobilewise.ai@gmail.com","ccEmail":"","emailSubject":"New Pre-Qual Lead: {{firstName}} {{lastName}}","clientEmail":"mobilewise.ai@gmail.com","supportPhone":"949-228-5263","emailTriggers":["confirmation has been sent"],"phoneTriggers":["I'll connect you now"]},
            "splashScreen": {"enabled":true,"agentId":"agent_7b0776ef6b855de5","title":"Meet Tess","subtitle":"Your Personal AI Web Guide","tessVideoUrl":"https://fcgbusobfdwnpoqyuzoe.supabase.co/storage/v1/object/sign/processed-videos/tess-button.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjJjNGVkZS0wYzRiLTQyMzAtOGE5MC1jMDhmNjhlNDVkNTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwcm9jZXNzZWQtdmlkZW9zL3Rlc3MtYnV0dG9uLm1wNCIsImlhdCI6MTc3MzgwNDA4MSwiZXhwIjoxODA1MzQwMDgxfQ.07K0XCnTt3zAZPp2ZAgZ-SzYhZj6nW1Vun8WW-zDAVQ","tessVideoFit":"cover","tickerKeywords":"","gradientCenter":"#1e4a8a","gradientOuter":"#0a1a2f","primaryButton":{"text":"Get AI help with Tess","gradientTop":"#f8c400","gradientBottom":"#d4a000","hoverTop":"#ffd700","hoverBottom":"#e0b000","textColor":"#0a0f1e"},"secondaryButton":{"text":"Just Browsing","gradientTop":"#3a4050","gradientBottom":"#2a2f3f","hoverTop":"#4a5060","hoverBottom":"#3a4050","textColor":"#ffffff"},"persistentButton":{"enabled":true,"position":"bottom-left","action":"activate-tess","gradientTop":"#f8c400","gradientBottom":"#d4a000"},"branding":{"name":"","logo":""}},
            "smartScreen": {"action":"showBestMatch","images":[{"url":"https://fcgbusobfdwnpoqyuzoe.supabase.co/storage/v1/object/public/clients/mortgage-assist-demo/smart-screens/zoom-invitation.jpg","link":"","name":"Zoom Invite","caption":"","imageSize":"auto","showTitle":true,"triggerMatch":["So lets stop here"],"backdropOpacity":"0.5","backgroundColor":"rgba(0,0,0,0.7)"}]}
        }
    };

    // ===== TRIGGER PHRASE (from dashboard) =====
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
            top: 50%; left: 45%;
            transform: translate(-50%, -50%);
            width: 280px !important;
            height: 400px !important;
            max-width: none !important;
            max-height: none !important;
            border-radius: 18px;
        }
        .splash-card {
            background: radial-gradient(circle at center, var(--grad-center, #1e4a8a) 0%, var(--grad-outer, #0a1a2f) 80%);
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
            position: absolute; bottom: 0; left: 0; right: 0;
            background: linear-gradient(90deg, rgba(0,0,0,0.9), rgba(248,196,0,0.2), rgba(0,0,0,0.9));
            backdrop-filter: blur(2px); color: #f8c400; padding: 6px 0;
            overflow: hidden; white-space: nowrap; font-size: 13px; font-weight: 600;
            text-shadow: 0 1px 2px rgba(0,0,0,0.8); z-index: 10; pointer-events: none;
            border-top: 2px solid #f8c400; border-bottom: none; box-shadow: 0 -2px 10px rgba(0,0,0,0.5);
        }
        .ticker-content { display: inline-block; animation: ticker 25s linear infinite; padding-left: 100%; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .ticker-item { display: inline-block; padding: 0 25px; color: white; font-size: 13px; font-weight: 500; letter-spacing: 0.5px; }
        .ticker-item i { margin-right: 8px; color: #f8c400; font-size: 12px; filter: drop-shadow(0 0 3px rgba(248,196,0,0.5)); }
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

    // ===== INTERVIEW LISTENER (QUESTIONS FROM LEMONSLICE) =====
    window.interviewListener = {
        isActive: false,
        answers: {},
        currentField: null,
        
        start: function() {
            this.isActive = true;
            this.answers = {};
            console.log("🎧 Interview listener activated");
        },
        
        // Called when Tess speaks - detects which question is being asked
        detectQuestion: function(tessText) {
            const patterns = {
                "loanType": ["type of loan", "FHA", "VA", "Conventional"],
                "monthlyIncome": ["monthly income", "gross monthly"],
                "downPayment": ["putting down", "down payment"],
                "creditScore": ["credit score"],
                "fullName": ["full name"],
                "email": ["email address"],
                "phone": ["phone number"],
                "scheduledDateTime": ["date and time", "Zoom meeting"],
                "specialRequests": ["special requests"]
            };
            
            for (const [field, keywords] of Object.entries(patterns)) {
                if (keywords.some(kw => tessText.toLowerCase().includes(kw))) {
                    this.currentField = field;
                    console.log("📋 Expecting answer for:", field);
                    return field;
                }
            }
            return null;
        },
        
        // Called when user speaks - stores the answer
        captureAnswer: function(userText) {
            if (this.currentField && this.isActive) {
                this.answers[this.currentField] = userText;
                console.log("💾 Stored " + this.currentField + ":", userText);
                this.currentField = null;
                return true;
            }
            return false;
        },
        
        // Called when interview completes
        finish: function() {
            this.isActive = false;
            console.log("✅ Interview complete. Answers:", this.answers);
            return this.answers;
        }
    };

    class PreQualificationController {
        constructor() {
            this.isActive = false;
            this.script = null;
            this.answers = {};
            this.currentStepIndex = 0;
            this.currentField = null;
            this.pendingValue = null;
            this.interviewCompleted = false;
        }

        startInterview() {
            if (this.isActive) return;
            
            this.isActive = true;
            this.currentStepIndex = 0;
            this.answers = {};
            
            // 🔥 NUCLEAR OPTION: Completely mute LemonSlice AI
            if (window.mainWidget) {
                window.mainWidget.setAttribute('muted', 'true');
                window.mainWidget.setAttribute('suppress-audio', 'true');
                window.mainWidget.setAttribute('suppress-ai', 'true');
                console.log("🔇 LemonSlice AI forcefully muted");
            }
            
            console.log("🎧 Listener Mode Activated - Waiting for LemonSlice questions");
        }

        handleUserInput(userText) {
            if (!this.isActive) return;
            
            // Clean credit score values — strip $ and , if current field is creditScore
            if (this.currentField === "creditScore") {
                userText = userText.replace(/[$,]/g, "").trim();
            }
            
            const lowerText = userText.toLowerCase();
            
            // Detect which field we're capturing based on Tess's last question
            if (this.currentField) {
                // Check if this is a confirmation ("yes" to "Is that correct?")
                if (lowerText === "yes" || lowerText === "yes it is" || lowerText === "correct" || lowerText === "that's correct") {
                    if (this.pendingValue) {
                        this.answers[this.currentField] = this.pendingValue;
                        console.log("✅ Confirmed:", this.currentField, "=", this.pendingValue);
                    }
                    this.pendingValue = null;
                    this.currentField = null;
                } else if (lowerText === "no" || lowerText.includes("redo") || lowerText.includes("repeat") || lowerText === "that's not correct") {
                    console.log("🔄 User wants to redo:", this.currentField);
                    this.pendingValue = null;
                    // Keep currentField so we capture the next attempt
                } else {
                    // This is the actual value being provided
                    this.pendingValue = userText;
                    console.log("📝 Pending:", this.currentField, "=", userText);
                }
            } else {
                // Store uncategorized responses
                console.log("💾 Captured (uncategorized):", userText);
            }
            
            // Store all responses in chronological order as backup
            if (!this.answers.allResponses) this.answers.allResponses = [];
            this.answers.allResponses.push({ 
                text: userText, 
                field: this.currentField || "unknown",
                timestamp: Date.now() 
            });
            
            // Check if we've collected all critical fields
            if (this.answers.fullName && this.answers.email && this.answers.phone && !this.interviewCompleted) {
                this.interviewCompleted = true;
                console.log("🎉 All critical fields collected!");
                // Give LemonSlice time to finish speaking before finishing
                setTimeout(() => {
                    this.finishInterview();
                }, 5000);
            }
        }

        detectFieldFromQuestion(tessText) {
            const lowerText = tessText.toLowerCase();
            
            if (lowerText.includes("full name") || lowerText.includes("start with your")) {
                this.currentField = "fullName";
            } else if (lowerText.includes("business name") || lowerText.includes("website")) {
                this.currentField = "businessName";
            } else if (lowerText.includes("email")) {
                this.currentField = "email";
            } else if (lowerText.includes("phone")) {
                this.currentField = "phone";
            } else if (lowerText.includes("date and time") || lowerText.includes("zoom meeting")) {
                this.currentField = "scheduledDateTime";
            } else if (lowerText.includes("type of loan") || lowerText.includes("fha")) {
                this.currentField = "loanType";
            } else if (lowerText.includes("monthly income") || lowerText.includes("gross monthly")) {
                this.currentField = "monthlyIncome";
            } else if (lowerText.includes("putting down") || lowerText.includes("down payment")) {
                this.currentField = "downPayment";
            } else if (lowerText.includes("credit score")) {
                this.currentField = "creditScore";
            } else if (lowerText.includes("special requests")) {
                this.currentField = "specialRequests";
            } else if (lowerText.includes("anything else")) {
                this.expectingClosingResponse = true;
                console.log("🎯 Expecting closing response (Yes/No)");
            }
            
            if (this.currentField) {
                console.log("🎯 Expecting answer for:", this.currentField);
            }
        }

        finishInterview() {
            this.isActive = false;
            console.log("✅ Interview Complete.");
            
            // 🔥 RESTORE LEMONSLICE AI
            if (window.mainWidget) {
                window.mainWidget.removeAttribute('muted');
                window.mainWidget.removeAttribute('suppress-audio');
                window.mainWidget.removeAttribute('suppress-ai');
                window.mainWidget.setAttribute('controlled-widget-state', 'inactive');
                console.log("🔊 LemonSlice AI restored");
            }
            
            this.speak("That is everything! I am generating your pre-qualification letter now.");
        trackEvent('prequal_complete');
            this.sendEmail();
        }

        speak(text) {
            if (!text) return;
            console.log("🤖 Tess says: " + text);
            
            // 🔥 FORCE DISABLE LEMONSLICE AI DURING INTERVIEW
            if (this.isActive && window.mainWidget) {
                window.mainWidget.setAttribute('suppress-ai', 'true');
                window.mainWidget.setAttribute('controlled-widget-state', 'active');
            }
            
            if (window.mainWidget && typeof window.mainWidget.sendMessage === "function") {
                try {
                    window.mainWidget.sendMessage(text);
                    console.log("📤 sendMessage called successfully");
                } catch(e) {
                    console.error("❌ sendMessage error:", e);
                }
            } else {
                console.error("❌ mainWidget not ready - activate Tess first!");
            }
        }

        sendEmail() {
        trackEvent('lead_captured', { email: data.email });
            console.log("📧 Sending emails...");
            const data = this.answers;
            
            // Build formatted answers string
            let formattedAnswers = "";
            for (var key in data) {
                if (data.hasOwnProperty(key) && key !== "allResponses" && key !== "interviewCompleted") {
                    formattedAnswers += key + ": " + data[key] + "\n";
                }
            }
            
            // Build structured JSON for the template
            const jsonForTemplate = {
                "Pre-Qualification Summary": {
                    "Loan Type": data.loanType || "Not provided",
                    "Monthly Income": data.monthlyIncome || "Not provided",
                    "Down Payment": data.downPayment || "Not provided",
                    "Credit Score": data.creditScore || "Not provided",
                    "Interested in Zoom": data.zoomInterest || "Not provided"
                },
                "Contact Information": {
                    "Full Name": data.fullName || "Not provided",
                    "Business/Website": data.businessName || "Not provided",
                    "Email": data.email || "Not provided",
                    "Phone": data.phone || "Not provided",
                    "Scheduled Date/Time": data.scheduledDateTime || "Not provided"
                },
                "Additional Info": {
                    "Special Requests": data.specialRequests || "None"
                },
                "All Responses": data.allResponses || []
            };
            
            // ===== EMAIL 1: TO PROSPECT (template_uix9cyx) =====
            if (data.email) {
                var prospectParams = {
                    full_name: data.fullName || "Valued Client",
                    email: data.email,
                    phone: data.phone || "Not provided",
                    scheduled_datetime: data.scheduledDateTime || "To be determined",
                    full_json: JSON.stringify(jsonForTemplate, null, 2),
                    submitted_at: new Date().toLocaleString()
                };
                
                emailjs.send("service_b9bppgb", "template_uix9cyx", prospectParams)
                    .then(() => console.log("✅ Prospect email sent to:", data.email))
                    .catch(e => console.error("❌ Prospect email error:", e));
            } else {
                console.warn("⚠️ No prospect email provided, skipping prospect email");
            }
            
            // ===== EMAIL 2: TO AGENCY/CLIENT (template_8kx812d) =====
            // 🔥 DYNAMIC: Pulls from BotemiaConfig emailConfig
            const clientEmail = window.BotemiaConfig?.modules?.emailConfig?.clientEmail || "mobilewise.ai@gmail.com";
            
            var clientParams = {
                to_email: clientEmail,
                full_name: data.fullName || "Not provided",
                business_name: data.businessName || "Not provided",
                email: data.email || "Not provided",
                phone: data.phone || "Not provided",
                scheduled_datetime: data.scheduledDateTime || "Not provided",
                loan_type: data.loanType || "Not provided",
                monthly_income: data.monthlyIncome || "Not provided",
                down_payment: data.downPayment || "Not provided",
                credit_score: data.creditScore || "Not provided",
                zoom_interest: data.zoomInterest || "Not provided",
                special_requests: data.specialRequests || "None",
                all_answers: formattedAnswers,
                submitted_at: new Date().toLocaleString()
            };
            
            emailjs.send("service_b9bppgb", "template_8kx812d", clientParams)
                .then(() => console.log("✅ Client notification sent to:", clientEmail))
                .catch(e => console.error("❌ Client email error:", e));
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
            const { createClient } = supabase;
            const sbClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
                realtime: { params: { eventsPerSecond: 10 } }
            });
            
            const tcsChannel = sbClient.channel("tess-commands");
            
            tcsChannel.on("broadcast", { event: "command" }, function(payload) {
                console.log("📡 [REALTIME] Command received:", payload);
                const command = payload.payload?.command;
                
                // ===== EMAIL COMMAND =====
                if (command === "SEND_EMAIL") {
                    console.log("📧 Email command received from TCS!");
                    if (window.preQualController && window.preQualController.isActive) {
                        window.preQualController.sendEmail();
                        window.preQualController.isActive = false;
                        console.log("✅ Email sent via TCS command");
                    } else {
                        console.warn("⚠️ Cannot send email - controller not active. Sending test confirmation...");
                        window.supabaseChannel.send({
                            type: "broadcast",
                            event: "trigger_test_result",
                            payload: {
                                module: "email_trigger",
                                success: true,
                                message: "Email trigger recognized (controller not active, but trigger detected)"
                            }
                        });
                    }
                }
                
                // ===== PHONE CONNECT COMMAND =====
                if (command === "PHONE_CONNECT") {
                    console.log("📞 Phone connect command received from TCS!");
                    const phoneNumber = window.BotemiaConfig?.modules?.emailConfig?.supportPhone || "949-228-5263";
                    console.log("📞 Would initiate call to:", phoneNumber);
                    window.supabaseChannel.send({
                        type: "broadcast",
                        event: "trigger_test_result",
                        payload: {
                            module: "phone_connect",
                            success: true,
                            message: "Phone trigger recognized — would dial " + phoneNumber
                        }
                    });
                }
                
                // ===== SMART SCREEN COMMAND =====
                if (command === "SHOW_SMART_SCREEN") {
                    console.log("📸 Smart Screen command received:", payload.payload);
                    if (typeof window.showSmartScreen === "function") {
                        window.showSmartScreen(payload.payload.trigger, payload.payload.image);
                    }
                }
                
                // ===== TEST TRIGGER COMMAND (For TCS test buttons) =====
                if (command === "test_trigger") {
                    const module = payload.payload.module;
                    const phrase = (payload.payload.trigger_phrase || "").toLowerCase();
                    console.log("🧪 TCS Test: Simulating trigger for " + module + " with phrase: " + phrase);
                    
                    let result = { success: false, message: "No trigger matched" };
                    
                    // --- Test Email Triggers ---
                    if (module === "email_trigger") {
                        const emailTriggers = window.BotemiaConfig?.modules?.emailConfig?.emailTriggers || [];
                        const matched = emailTriggers.some(t => t && phrase.includes(t.toLowerCase()));
                        result = {
                            success: matched,
                            message: matched ? "✅ Email trigger would fire" : "❌ No email trigger matched the phrase"
                        };
                    }
                    
                    // --- Test Phone Triggers ---
                    if (module === "phone_connect") {
                        const phoneTriggers = window.BotemiaConfig?.modules?.emailConfig?.phoneTriggers || [];
                        const matched = phoneTriggers.some(t => t && phrase.includes(t.toLowerCase()));
                        result = {
                            success: matched,
                            message: matched ? "✅ Phone trigger would fire" : "❌ No phone trigger matched the phrase"
                        };
                    }
                    
                    // --- Test Smart Screen Triggers ---
                    if (module === "smart_screen") {
                        const images = window.BotemiaConfig?.modules?.smartScreen?.images || [];
                        let matched = false;
                        for (const img of images) {
                            if ((img.triggerMatch || []).some(t => t && phrase.includes(t.toLowerCase()))) {
                                matched = true;
                                break;
                            }
                        }
                        result = {
                            success: matched,
                            message: matched ? "✅ Smart Screen would display" : "❌ No smart screen trigger matched"
                        };
                    }
                    
                    // --- Test Pre-Qual Trigger ---
                    if (module === "pre_qual") {
                        const pqTrigger = window.BotemiaConfig?.modules?.preQualification?.triggerPhrase || "";
                        const matched = pqTrigger && phrase.includes(pqTrigger.toLowerCase());
                        result = {
                            success: matched,
                            message: matched ? "✅ Pre-qual trigger would fire" : "❌ Pre-qual trigger not matched"
                        };
                    }
                    
                    // --- Test Website Info Triggers ---
                    if (module === "website_info") {
                        const webTriggers = window.BotemiaConfig?.modules?.websiteInfo?.triggers || [];
                        const matched = webTriggers.some(t => t && phrase.includes(t.toLowerCase()));
                        result = {
                            success: matched,
                            message: matched ? "✅ Website Info trigger would fire" : "❌ No website trigger matched"
                        };
                    }
                    
                    // --- Test Testimonials Triggers ---
                    if (module === "testimonials") {
                        const groups = window.BotemiaConfig?.modules?.testimonial?.groups || [];
                        let matched = false;
                        for (const g of groups) {
                            if (g.triggerPhrase && phrase.includes(g.triggerPhrase.toLowerCase())) {
                                matched = true;
                                break;
                            }
                        }
                        result = {
                            success: matched,
                            message: matched ? "✅ Testimonial would display" : "❌ No testimonial trigger matched"
                        };
                    }
                    
                    // --- Test Video Vault Triggers ---
                    if (module === "video_vault") {
                        const videos = window.BotemiaConfig?.modules?.videoVault?.videos || [];
                        let matched = false;
                        for (const v of videos) {
                            if (v.triggerPhrase && phrase.includes(v.triggerPhrase.toLowerCase())) {
                                matched = true;
                                break;
                            }
                        }
                        result = {
                            success: matched,
                            message: matched ? "✅ Video would play" : "❌ No video trigger matched"
                        };
                    }
                    
                    // Send result back to TCS
                    window.supabaseChannel.send({
                        type: "broadcast",
                        event: "trigger_test_result",
                        payload: {
                            module: module,
                            ...result,
                            timestamp: Date.now()
                        }
                    });
                    console.log("📤 Test result sent to TCS:", result);
                }
            });
            
            tcsChannel.subscribe(function(status) { 
                if (status === "SUBSCRIBED") console.log("✅ [REALTIME] Connected to Supabase"); 
            });
            window.supabaseChannel = tcsChannel;
            
            // Health monitor channel
            var healthChannel = sbClient.channel("health-monitor");
            healthChannel.subscribe(function(status) {
                if (status === "SUBSCRIBED") console.log("🩺 Health monitor channel connected");
            });
            window.healthChannel = healthChannel;
            healthChannel.on("broadcast", { event: "test_ping" }, function(payload) {
                healthChannel.send({
                    type: "broadcast", event: "test_pong",
                    payload: { clientId: window.BotemiaConfig?.id || "unknown", timestamp: Date.now(), echoTimestamp: payload.payload.timestamp }
                });
            });
        }; // END script.onload
        document.head.appendChild(script);
    })(); // END Supabase IIFE
    // ===== ANALYTICS EVENT TRACKER =====
    function trackEvent(eventType, eventData = {}) {
        if (!window.supabaseChannel) return;
        
        window.supabaseChannel.send({
            type: 'broadcast',
            event: 'analytics_event',
            payload: {
                client_id: window.BotemiaConfig?.id || 'unknown',
                session_id: window.tessSessionId || 'unknown',
                event_type: eventType,
                event_data: eventData,
                source_url: window.location.href,
                referrer: document.referrer || 'direct',
                timestamp: Date.now()
            }
        });
        console.log('📊 Tracked: ' + eventType, eventData);
    }

    window.preQualController = new PreQualificationController();
    console.log("✅ Controller created (Listener Mode)");
    window.broadcastTessTranscript = function(text) {
        if (window.supabaseChannel) {
            window.supabaseChannel.send({ type: 'broadcast', event: 'tess_transcript', payload: { type: 'TESS_TRANSCRIPT', text: text, timestamp: Date.now() } });
        }
    };

    // ==========================================
    // 🍋 DAILY SDK LOADER
    // ==========================================
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

    async function initDaily() {
        console.log("📞 initDaily: Starting process...");
        
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
                    container = document.createElement("div");
                    container.id = "daily-container";
                    container.style.display = "none";
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
                    
                    // 🔥 NEW: Handle USER transcriptions during interview
                    if (window.preQualController && window.preQualController.isActive && ev?.data?.type === "user_transcription") {
                        const userText = ev.data.transcription || ev.data.text || "";
                        console.log("👤 [DAILY] User said:", userText);
                        window.preQualController.handleUserInput(userText);
                        return;
                    }
                    
                    if (ev?.data?.type === "agent_transcription") {
                        const tessText = ev.data.transcription;
                        console.log("🤖 [DAILY] Tess said:", tessText);
                        
                        // Track what question Tess is asking
                        if (window.preQualController && window.preQualController.isActive) {
                            window.preQualController.detectFieldFromQuestion(tessText);
                        }
                        
                        // Broadcast to Supabase
                        if (window.supabaseChannel) {
                            window.supabaseChannel.send({
                                type: "broadcast",
                                event: "tess_transcript",
                                payload: { text: tessText, timestamp: Date.now() }
                            });
                        }
                        
                        // ===== 🔥 DYNAMIC TRIGGER LOGIC =====
                        const triggerPhrase = window.TRIGGER_PHRASE;
                        const lowerText = tessText.toLowerCase();
                        
                        // --- PRE-QUAL TRIGGER ---
                        if (triggerPhrase) {
                            const fuzzyTriggers = [
                                triggerPhrase,
                                triggerPhrase.toLowerCase(),
                                "YES_INITIATE_PREQUAL"
                            ].filter(t => t);
                            const hasTrigger = fuzzyTriggers.some(trigger => lowerText.includes(trigger.toLowerCase()));
                            if (hasTrigger) {
                                console.log("🎯 TRIGGER DETECTED! Starting pre-qualification...");
                                console.log("🔥 Triggered by:", fuzzyTriggers.find(t => lowerText.includes(t.toLowerCase())));
                                setTimeout(function() { forcePreQualification(); }, 3500);
                            }
                        }

                        // --- EMAIL TRIGGER (Dynamic from config) ---
                        const emailCfg = window.BotemiaConfig?.modules?.emailConfig;
                        if (emailCfg?.emailTriggers?.length) {
                            if (emailCfg.emailTriggers.some(t => lowerText.includes(t.toLowerCase()))) {
                                console.log("📧 Email trigger detected!");
                                if (window.preQualController?.isActive) {
                                    window.preQualController.sendEmail();
                                    window.preQualController.isActive = false;
                                    console.log("✅ Email sent via trigger");
                                }
                            }
                        }

                        // --- SMART SCREEN TRIGGER (Dynamic from config) ---
                        const smartImages = window.BotemiaConfig?.modules?.smartScreen?.images || [];
                        for (const img of smartImages) {
                            if ((img.triggerMatch || []).some(t => lowerText.includes(t.toLowerCase()))) {
                                console.log("📸 Smart Screen matched:", img.name);
                                if (window.supabaseChannel) {
                                    window.supabaseChannel.send({
                                        type: "broadcast",
                                        event: "smart_screen_trigger",
                                        payload: { image: img, trigger: tessText, timestamp: Date.now() }
                                    });
                                }
                                break;
                            }
                        }

                        // --- PHONE TRIGGER (Dynamic from config) ---
                        if (emailCfg?.phoneTriggers?.length) {
                            if (emailCfg.phoneTriggers.some(t => lowerText.includes(t.toLowerCase()))) {
                                console.log("📞 Phone trigger detected!");
                                window.open("tel:" + (emailCfg.supportPhone || "949-228-5263"), "_blank");
                            }
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

    // ==========================================
    // 🍋 UNIVERSAL LISTENER (For PostMessages)
    // ==========================================
    function setupUniversalListener() {
        console.log("👂 Universal Listener Activated (Universal Mode).");
        
        window.addEventListener("message", (event) => {
            if (event.data && event.data.what === "iframe-call-message") return;
            if (!event.data || !event.data.type) return;
            console.log("📩 [INCOMING] Type:", event.data?.type, "Command:", event.data?.command);
            
            // Handle TEST_PING from Communication Monitor
            if (event.data.type === "TEST_PING") {
                console.log("📡 TEST_PING received, sending PONG...");
                if (window.supabaseChannel) {
                    window.supabaseChannel.send({
                        type: "broadcast",
                        event: "test_pong",
                        payload: {
                            clientId: window.BotemiaConfig?.id || "unknown",
                            timestamp: Date.now(),
                            echoTimestamp: event.data.timestamp
                        }
                    });
                }
                return;
            }
            
            // Handle START_PRE_QUAL
            if (event.data.type === "START_PRE_QUAL" || event.data.command === "START_PRE_QUAL") {
                console.log("🎯 START_PRE_QUAL received!");
                if (window.preQualController && !window.preQualController.isActive) {
                    forcePreQualification();
                }
                return;
            }
            
            // Handle transcript for interview answers
            if ((event.data.type === "transcript" || event.data.type === "ai_response") && event.data.text) {
                if (window.preQualController && window.preQualController.isActive) {
                    window.preQualController.handleUserInput(event.data.text);
                }
            }
        });
    }

    // ==========================================
    // ✅ GLOBAL EXPORTS (CRITICAL FOR DASHBOARD TESTS)
    // ==========================================
    window.initDaily = initDaily;
    window.loadDailySDK = loadDailySDK;
    
    // Initialize listener immediately
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
        console.trace("🔍 [TRACE] forcePreQualification called from:");
        console.log("🚀 forcePreQualification - Activating Listener Mode");
        
        if (isPreQualificationActive) {
            console.log("⚠️ Pre-qualification already active, skipping");
            return;
        }
        
        if (!window.preQualController) {
            console.error("❌ preQualController not found");
            return;
        }
        
        // Activate listener mode
        window.preQualController.isActive = true;
        window.preQualController.answers = {};
        
        // Send trigger to LemonSlice
        if (window.mainWidget && typeof window.mainWidget.sendMessage === "function") {
            window.mainWidget.sendMessage("START_INTERVIEW_NOW");
        trackEvent('prequal_start');
            console.log("📤 Sent START_INTERVIEW_NOW to LemonSlice");
        }
        
        isPreQualificationActive = true;
        console.log("✅ Listener Mode activated");
    }
    window.forcePreQualification = forcePreQualification;

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

        trackEvent('splash_view');
        const card = document.createElement('div');
        card.className = 'splash-card';
        // Original: Direct style application (Safer than CSS variables)
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

    // ===== ACTIVATE TESS FUNCTION =====
    async function activateTess() {
        console.log("🖱️ Click detected: Capturing user gesture for audio...");
        
        // Remove splash widget
        const splashWidget = document.getElementById('splash-widget');
        if (splashWidget) {
            splashWidget.innerHTML = '';
            if (splashWidget.parentNode) splashWidget.parentNode.removeChild(splashWidget);
        }
        
        // Remove overlay
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
                try {
                    if (window.mainWidget && typeof window.mainWidget.micOn === 'function') {
                        await window.mainWidget.micOn();
                        await window.mainWidget.unmute?.();
                    }
                } catch(e) {
                    console.error("❌ Mic activation failed:", e);
                }
            }, 3000);
        }, 100);
        
        if (typeof initDaily === "function") { initDaily(); }
        window.activateTess = activateTess;
    }
        trackEvent('activate_tess');

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
        } else {
            const tessImage = config?.tessImage;
            if (tessImage) { avatarBtn.innerHTML = `<img src="${tessImage}" style="width: 170px; height: 170px; border-radius: 50%; object-fit: cover; border: 3px solid white;">`; }
            else { avatarBtn.innerHTML = `<i class="fas fa-user-circle" style="font-size: 140px; color: white;"></i>`; }
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
        if (config?.persistentButton?.enabled) {
            showPersistentAvatar();
        trackEvent('just_browsing');
        } else {
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
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initWidget); }
    else { initWidget(); }
    console.log('✅ Botemia Bridge v5.8 loaded for', window.BotemiaConfig.name);

    // ===== CLIENT ANNOUNCEMENT FUNCTION =====
    function announceToTCS() {
        const sendAnnouncement = function() {
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
                return true;
            }
            return false;
        };

        if (sendAnnouncement()) return;
        
        console.log('⏳ Supabase channel not ready, retrying...');
        let attempts = 0;
        const interval = setInterval(function() {
            attempts++;
            if (sendAnnouncement() || attempts >= 6) {
                clearInterval(interval);
            }
        }, 500);
    }

    setTimeout(announceToTCS, 4000);
    // ===== HEALTH CHECK FOR TCS DASHBOARD =====
    window.bridgeHealthCheck = function() {
        return {
            status: "active",
            mode: "listener",
            clientId: window.BotemiaConfig?.id,
            readyForHandoff: !!window.mainWidget,
            dailyConnected: !!window.dailyCallObject,
            timestamp: Date.now()
        };
    };
    console.log("🩺 Bridge health check available: window.bridgeHealthCheck()");
})();
