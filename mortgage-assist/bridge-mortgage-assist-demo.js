// Botemia Bridge for Mortgage Assist Demo
// Generated: 3/31/2026, 12:02:13 PM
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
    "updatedAt": "2026-03-31T19:02:13.261Z"
};

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
        widget.setAttribute('agent-id', 'agent_7b0776ef6b855de5');
        widget.setAttribute('inline', '');
        widget.setAttribute('custom-minimized-width', '280');
        widget.setAttribute('custom-minimized-height', '400');
        widget.setAttribute('initial-state', 'active');
        widget.setAttribute('hide-ui', '');
        widget.setAttribute('suppress-initial-message', 'true');
        widget.id = 'splash-widget';
        return widget;
    }


    // ===== DYNAMIC PRE-QUALIFICATION SCRIPT (From Supabase) =====
    window.preQualScript = {
        steps: [
            { 
                id: "confirmation", 
                type: "choice",
                text: "Tess: I can certainly help with that. Does that work for you?",
                question: "Tess: I can certainly help with that. Does that work for you?",
                field: "confirmation",
                validation: "text",
                options: ["Yes","No"]
            },
            { 
                id: "loanType", 
                type: "choice",
                text: "Tess: Let's get started. What type of loan are you looking for? For example, FHA, VA, Conventional, or USDA?",
                question: "Tess: Let's get started. What type of loan are you looking for? For example, FHA, VA, Conventional, or USDA?",
                field: "loanType",
                validation: "text",
                options: ["FHA","VA (Veterans)","Conventional","USDA","Other/Not Sure"]
            },
            { 
                id: "loanPurpose", 
                type: "choice",
                text: "Tess: Great. And are you looking to purchase a new home or refinance an existing one?",
                question: "Tess: Great. And are you looking to purchase a new home or refinance an existing one?",
                field: "loanPurpose",
                validation: "text",
                options: ["Purchase a home","Refinance current home","Cash-out refinance"]
            },
            { 
                id: "propertyType", 
                type: "choice",
                text: "Tess: What type of property is this for?",
                question: "Tess: What type of property is this for?",
                field: "propertyType",
                validation: "text",
                options: ["Single family home","Condominium","Townhouse","Multi-family (2-4 units)","Manufactured home"]
            },
            { 
                id: "estimatedCreditScore", 
                type: "choice",
                text: "Tess: Now let's look at qualifications. How would you estimate your credit score?",
                question: "Tess: Now let's look at qualifications. How would you estimate your credit score?",
                field: "estimatedCreditScore",
                validation: "text",
                options: ["Excellent (740+)","Good (700-739)","Fair (620-699)","Challenged (below 620)","Not sure"]
            },
            { 
                id: "annualIncome", 
                type: "currency",
                text: "Tess: Approximately what is your annual household income?",
                question: "Tess: Approximately what is your annual household income?",
                field: "annualIncome",
                validation: "text",
                options: null
            },
            { 
                id: "employmentStatus", 
                type: "choice",
                text: "Tess: What is your current employment status?",
                question: "Tess: What is your current employment status?",
                field: "employmentStatus",
                validation: "text",
                options: ["Employed","Self-Employed","Retired","Other"]
            },
            { 
                id: "selfEmployedDocs", 
                type: "choice",
                text: "Tess: Being self-employed opens up great options. Do you document income with Tax Returns or Bank Statements?",
                question: "Tess: Being self-employed opens up great options. Do you document income with Tax Returns or Bank Statements?",
                field: "selfEmployedDocs",
                validation: "text",
                options: ["Tax Returns","Bank Statements","Both"]
            },
            { 
                id: "employedDocs", 
                type: "choice",
                text: "Tess: And do you have W-2s or are you 1099?",
                question: "Tess: And do you have W-2s or are you 1099?",
                field: "employedDocs",
                validation: "text",
                options: ["W-2","1099"]
            },
            { 
                id: "downPayment", 
                type: "choice",
                text: "Tess: How much do you plan to put down as a down payment?",
                question: "Tess: How much do you plan to put down as a down payment?",
                field: "downPayment",
                validation: "text",
                options: ["Less than 3%","3-5%","5-10%","10-20%","20%+"]
            },
            { 
                id: "downPaymentSource", 
                type: "choice",
                text: "Tess: Where are those funds coming from?",
                question: "Tess: Where are those funds coming from?",
                field: "downPaymentSource",
                validation: "text",
                options: ["Savings","Gift from family","Sale of current home","Investment/401k","Other"]
            },
            { 
                id: "bankruptcyHistory", 
                type: "choice",
                text: "Tess: Have you had a bankruptcy or foreclosure in the last 7 years?",
                question: "Tess: Have you had a bankruptcy or foreclosure in the last 7 years?",
                field: "bankruptcyHistory",
                validation: "text",
                options: ["Yes","No","Prefer not to say"]
            },
            { 
                id: "militaryService", 
                type: "choice",
                text: "Tess: Have you or your spouse served in the military? (This helps us check for VA benefits).",
                question: "Tess: Have you or your spouse served in the military? (This helps us check for VA benefits).",
                field: "militaryService",
                validation: "text",
                options: ["Yes - Active duty","Yes - Veteran","No"]
            },
            { 
                id: "firstTimeBuyer", 
                type: "choice",
                text: "Tess: Are you a first-time homebuyer?",
                question: "Tess: Are you a first-time homebuyer?",
                field: "firstTimeBuyer",
                validation: "text",
                options: ["Yes","No"]
            },
            { 
                id: "timeline", 
                type: "choice",
                text: "Tess: What is your timeline for moving forward?",
                question: "Tess: What is your timeline for moving forward?",
                field: "timeline",
                validation: "text",
                options: ["Already have an offer","Looking now - next 30 days","1-3 months","3-6 months","Just exploring"]
            },
            { 
                id: "step_15", 
                type: "text",
                text: "Tess: Excellent! Based on what you've told me, we have some great loan options that fit your situation. Now, to generate your official pre-qualification letter, I just need a few details.",
                question: "Tess: Excellent! Based on what you've told me, we have some great loan options that fit your situation. Now, to generate your official pre-qualification letter, I just need a few details.",
                field: "",
                validation: "text",
                options: null
            },
            { 
                id: "fullName", 
                type: "text",
                text: "Tess: First, what is your full name?",
                question: "Tess: First, what is your full name?",
                field: "fullName",
                validation: "text",
                options: null
            },
            { 
                id: "email", 
                type: "email",
                text: "Tess: And what is the best email address to send your pre-qualification letter to?",
                question: "Tess: And what is the best email address to send your pre-qualification letter to?",
                field: "email",
                validation: "text",
                options: null
            },
            { 
                id: "phone", 
                type: "phone",
                text: "Tess: Finally, what is the best phone number to reach you if our loan team has questions?",
                question: "Tess: Finally, what is the best phone number to reach you if our loan team has questions?",
                field: "phone",
                validation: "text",
                options: null
            },
            { 
                id: "step_19", 
                type: "text",
                text: "Tess: That's everything! I'm generating your pre-qualification file now. ✅",
                question: "Tess: That's everything! I'm generating your pre-qualification file now. ✅",
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
        
        processResponse: function(userInput) {
            if (!this.active) return null;
            const currentStep = this.steps[this.currentStepIndex];
            if (!currentStep) {
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

        // ===== SEND EMAIL FUNCTION (FIXED & INSIDE CLASS) =====
        async sendEmail() {
            console.log("📧 Sending pre-qualification emails...");
            
            try {
                // ===== EMAIL 1: TO LOAN OFFICER =====
                await emailjs.send(
                    "service_b9bppgb",
                    "template_uix9cyx",
                    {
                        to_email: "loans@clientcompany.com",
                        cc_email: "",
                        subject: "New Pre-Qual Lead: {{firstName}} {{lastName}}".replace("{{firstName}}", this.answers.firstName || "Client").replace("{{lastName}}", this.answers.lastName || ""),
                        first_name: this.answers.firstName || "",
                        last_name: this.answers.lastName || "",
                        email: this.answers.email || "",
                        phone: this.answers.phone || "",
                        full_answers: JSON.stringify(this.answers, null, 2)
                    }
                );
                console.log("✅ Loan officer email sent");

                // ===== EMAIL 2: TO CLIENT =====
                if (this.answers.email) {
                    await emailjs.send(
                        "service_b9bppgb",
                        "template_8kx812d",
                        {
                            to_email: this.answers.email,
                            first_name: this.answers.firstName || "Valued Client",
                            message: "Thank you for completing your pre-qualification! A loan officer will contact you within 15 minutes."
                        }
                    );
                    console.log("✅ Client confirmation email sent");
                }
            } catch (error) {
                console.error("❌ Failed to send emails:", error);
            }
        }
    }

    // Expose class to global scope for testing/debugging
    window.PreQualificationController = PreQualificationController;

    window.preQualController = new PreQualificationController();
    console.log("✅ Controller created with", window.preQualScript?.steps?.length, "steps");

    // Listen for commands from TCS across different domains
    try {
        const channel = new BroadcastChannel("tess-discovery");
        channel.onmessage = (event) => {
            const data = event.data;
            
            // Check for Pre-Qual Command
            if (data.command === "START_PRE_QUAL" || data.type === "START_PRE_QUAL") {
                console.log("📡 [BROADCAST] Received START_PRE_QUAL from TCS");
                if (window.preQualController && !window.preQualController.isActive) {
                    window.preQualController.startInterview();
                }
            }
            
            // Check for other triggers if needed
            if (data.type === "MODULE_TRIGGERED") {
                console.log("📡 [BROADCAST] Module Triggered:", data.module);
                // Handle other modules here if necessary
            }
        };
        console.log("📡 Broadcast Channel Listener Active.");
    } catch (e) {
        console.warn("BroadcastChannel not supported:", e);
    }

    let lastTriggerTime = 0;
    const TRIGGER_COOLDOWN = 3000; // 3 seconds brake

    function setupUniversalListener() {
        console.log("👂 Universal Listener Activated (Silent Mode).");
        
        window.addEventListener("message", (event) => {
            
            // ========================================
            // 🔇 NOISE FILTER (Must be first!)
            // ========================================
            // This stops the 3400+ lines of video widget logs
            if (event.data && event.data.what === "iframe-call-message") {
                return; 
            }

            // ========================================
            // 🔍 DIAGNOSTIC: LOG ONLY CLEAN MESSAGES
            // ========================================
            // We only log here if the message passed the filter above
            console.log("📩 [INCOMING] Type:", event.data?.type, "Command:", event.data?.command);
            
            // ========================================
            // 1. COMMAND LISTENER (Highest Priority)
            // ========================================
            
            // Check for START_PRE_QUAL in either format
            if (event.data && (event.data.type === "START_PRE_QUAL" || event.data.command === "START_PRE_QUAL")) {
                console.log("🎯🎯🎯 MATCH FOUND! START_PRE_QUAL RECEIVED! 🎯🎯🎯");
                console.log("🎯🎯🎯 STARTING INTERVIEW NOW! 🎯🎯🎯");
                if (window.preQualController && !window.preQualController.isActive) {
                    window.preQualController.startInterview();
                }
                return;
            }

            // Also handle TCS_COMMAND format
            if (event.data && event.data.type === "TCS_COMMAND" && event.data.command === "START_PRE_QUAL") {
                console.log("🎯🎯🎯 TCS COMMAND FORMAT DETECTED! 🎯🎯🎯");
                if (window.preQualController && !window.preQualController.isActive) {
                    window.preQualController.startInterview();
                }
                return;
            }

            // SAFETY: Ignore garbage
            if (!event.data || !event.data.type) return;
            
            const msgType = event.data.type;
            const msgText = (event.data.text || event.data.content || "").toLowerCase();
            
            const isValidTrigger = (msgType === "transcript" || msgType === "ai_response");
            if (!isValidTrigger) return;
            
            console.log(`📨 Heard: "${msgText}"`);
            
            // ========================================
            // 4. INTERVIEW EARS (Feeding answers)
            // ========================================
            
            if (window.preQualController && window.preQualController.isActive) {
                if (msgType === "transcript") {
                    window.preQualController.handleUserInput(event.data.text);
                }
            }
            
        });
    }

    // Expose function to global scope for testing/debugging
    window.setupUniversalListener = setupUniversalListener;

    // Catch ALL messages for TCS commands
    window.addEventListener("message", (event) => {
        
        // 🔇 NOISE FILTER: Ignore video widget noise here too
        if (event.data && event.data.what === "iframe-call-message") {
            return;
        }

        console.log("🔍 CHECKING MESSAGE:", event.data);
        if (event.data && (event.data.command === "START_PRE_QUAL" || 
            (event.data.type === "TCS_COMMAND" && event.data.command === "START_PRE_QUAL"))) {
            console.log("🎯🎯🎯 TCS COMMAND CAUGHT! 🎯🎯🎯");
            if (window.preQualController && !window.preQualController.isActive) {
                window.preQualController.startInterview();
            }
        }
    });

    setupUniversalListener();

    function createMainWidget() {
        const widget = document.createElement('lemon-slice-widget');
        
        // 🆕 ROOT CAUSE FIX: ID MAPPING
        // If we dont provide a valid ID, the widget defaults to "0", causing a 404.
        const clientId = window.BotemiaConfig.id || 'mortgage-assist-demo';
        
        // 1. Set CLIENT ID (Primary)
        widget.setAttribute('client-id', clientId);
        
        // 2. Set AGENT ID (Secondary - Keep for compatibility)
        widget.setAttribute('agent-id', 'agent_7b0776ef6b855de5');
        
        widget.setAttribute('initial-state', 'minimized');
        widget.setAttribute('custom-minimized-width', '144');
        widget.setAttribute('custom-minimized-height', '216');
        widget.id = 'main-widget';
        widget.style.display = 'none';
        widget.addEventListener('ready', () => {
            console.log('[Bridge] Main Widget Ready.');
            forceMortgageIntro(widget);
        });
        
        return widget;
    }

    function forceMortgageIntro(widget) {
        diagLog("Intro Function Triggered");
        
        widget.setAttribute('controlled-widget-state', 'active');
        diagLog("Widget state set to active");
        
        try { widget.micOn?.(); widget.unmute?.(); } catch(e) {}
        diagLog("Mic/Unmute attempted");
        
        const message = "Hi! I'm Tess, your mortgage AI assistant. I'm here to help you with rates, qualification, and finding the right loan program. What's your first name?";
        
        setTimeout(() => {
            diagLog("Timeout finished. Sending message...");
            try {
                if (typeof widget.sendMessage === 'function') {
                    widget.sendMessage(message);
                    diagLog("Message sent successfully");
                } else {
                    diagLog("ERROR: sendMessage missing");
                }
            } catch (e) {
                diagLog("CRASH: " + e.message);
            }
        }, 3000);
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

    function activateTess() {
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

        // 4. CREATE MAIN WIDGET
        setTimeout(() => {
            if (!window.mainWidget || !document.body.contains(window.mainWidget)) {
                window.mainWidget = createMainWidget();
                window.mainWidget.setAttribute('hide-ui', 'true');
                document.body.appendChild(window.mainWidget);
            }
            
            window.mainWidget.style.display = 'block';
            window.mainWidget.setAttribute('controlled-widget-state', 'active');
            
            // 5. Activate Audio
            setTimeout(async () => {
                console.log("🎤 Finalizing audio state...");
                try {
                    if (window.mainWidget && typeof window.mainWidget.micOn === 'function') {
                        await window.mainWidget.micOn();
                        await window.mainWidget.unmute?.();
                        console.log("✅ Microphone activated");
                        
                        // Force unmute shadow DOM as backup
                        await forceUnmute();
                        
                        // 🔥 REMOVED: Controller already created earlier in the bridge
                        // No need to create another instance here
                        
                    }
                } catch (e) {
                    console.error("❌ Mic activation failed:", e);
                    forceUnmute();
                }
            }, 3000);
        }, 100);
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
            
            // === NEW: AUTO-LAUNCH TCS REMOTE CONTROL ===
            // Delay to ensure page is stable before popping up the window
            setTimeout(() => {
                openTCS_ControlPanel();
            }, 2500);
        }; 
        script.onerror = () => console.error('❌ Failed to load widget');
        document.head.appendChild(script);
        
        // 2. Create Splash Widget (This is now our ONLY widget)
        setTimeout(() => { showSplash(); }, 100);
    }

    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initWidget); }
    else { initWidget(); }

    console.log('✅ Botemia Bridge v5.4 loaded for', window.BotemiaConfig.name);
    // ===== CLIENT ANNOUNCEMENT FUNCTION =====
    function announceToTCS() {
        if (window.opener) {
            window.opener.postMessage({
                type: 'BRIDGE_ACTIVE',
                clientId: window.BotemiaConfig.id,
                url: window.location.href
            }, '*');
        }
        const channel = new BroadcastChannel('tess-discovery');
        channel.postMessage({
            type: 'CLIENT_INFO',
            clientId: window.BotemiaConfig.id,
            url: window.location.href
        });
        console.log('📢 Announced to TCS via broadcast');
    }

    setTimeout(announceToTCS, 2000);

    window.addEventListener('message', function(event) {
        
        // 🔥 CRITICAL FIX: Ignore empty/undefined messages immediately
        if (!event.data || !event.data.type) return;
        
        console.log('📨 Client received message:', event.data.type);
        
        // Handle Dashboard Commands
        if (event.data.type === 'DASHBOARD_COMMAND') {
            if (event.data.command === 'toggleOverlays') { window.disableBridgeTriggers = event.data.disabled; }
            return;
        }
        
        // Handle Module Triggers
        if (event.data.type === 'MODULE_TRIGGERED' && !window.disableBridgeTriggers) { window.showModule(event.data.module, event.data.triggerPhrase); }
        
        // 1. HANDSHAKE: TCS says "I'm Ready"
        if (event.data?.type === 'TCS_READY') {
            console.log('✅ TCS Ready signal received! Responding...');
            if (event.source) {
                event.source.postMessage({
                    type: 'CLIENT_INFO',
                    clientId: window.BotemiaConfig.id,
                    name: window.BotemiaConfig.name,
                    url: window.location.href,
                    timestamp: Date.now(),
                    status: 'ready'
                }, '*');
                console.log('📤 Sent CLIENT_INFO to TCS');
            }
        }
        
        // 2. COMMANDS: Handle triggers from TCS
        if (event.data?.type === 'TCS_COMMAND') {
            console.log('🎯 Command received:', event.data.command);
            switch(event.data.command) {
                case 'START_PRE_QUAL':
                    if (window.preQualController) {
                        console.log('🚀 TCS Trigger: Starting Interview');
                        window.preQualController.startInterview();
                    }
                    break;
                case 'SHOW_TESTIMONIAL':
                    console.log('Show testimonial:', event.data.data);
                    break;
                case 'SHOW_VIDEO':
                    console.log('Show video:', event.data.data);
                    break;
                case 'SHOW_SMART_SCREEN':
                    console.log('Show smart screen:', event.data.data);
                    break;
            }
        }
        
        // 3. PING: Health check from TCS
        if (event.data?.type === 'PING') {
            if (event.source) {
                event.source.postMessage({
                    type: 'PONG',
                    clientId: window.BotemiaConfig.id,
                    timestamp: Date.now()
                }, '*');
            }
        }
    });
    console.log('✅ TCS message listener installed');

    // Configuration: UPDATE THIS TO YOUR ACTUAL DOMAIN
    const TCS_SERVER_URL = 'https://mobilewise.netlify.app/trigger-control-system'; 

    function openTCS_ControlPanel() {
        // 1. Check if TCS is already open (prevents duplicates)
        if (window.tcsWindow && !window.tcsWindow.closed) {
            console.log("🔗 TCS is already open. Focusing...");
            window.tcsWindow.focus();
            return;
        }

        // 2. Get Client ID from Config
        const clientId = window.BotemiaConfig.id;
        
        // 3. Construct URL with Client ID so TCS knows who it's controlling
        const tcsUrl = `${TCS_SERVER_URL}?clientId=${clientId}&websiteUrl=${encodeURIComponent(window.location.href)}`;
        
        // 4. Open the Popup
        console.log("🔗 Opening TCS Control Panel from:", TCS_SERVER_URL);
        try {
            window.tcsWindow = window.open(
                tcsUrl, 
                'Botemia_TCS_Control', 
                'width=1200,height=800,scrollbars=yes,resizable=yes'
            );
        } catch (e) {
            console.error("❌ Failed to open TCS (Popup blocked?):", e);
        }
    }

})();
