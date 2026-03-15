// Botemia Bridge for Mortgage Assist Demo
// Generated: 3/15/2026, 12:59:50 PM
// Client ID: mortgage-assist-demo
// Version: 5.0 - FULL SMART SCREEN WITH BACKDROP

(function() {
    "use strict";

    // ===== EMBEDDED CLIENT CONFIGURATION =====
    window.BotemiaConfig = {
    "id": "mortgage-assist-demo",
    "name": "Mortgage Assist Demo",
    "agentId": "",
    "widgetId": "",
    "apiKey": "",
    "environment": "production",
    "industry": "mortgage",
    "modules": {
        "splashScreen": {
            "enabled": true,
            "agentId": "agent_7b0776ef6b855de5",
            "title": "Meet Tess",
            "subtitle": "Your Personal AI Smart Guide",
            "tessImage": "",
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
                "position": "bottom-left",
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
            "images": [
                {
                    "name": "Botemia Intro",
                    "url": "https://fcgbusobfdwnpoqyuzoe.supabase.co/storage/v1/object/sign/Smart%20Screens%20Demo/botemia-intro.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8wNjJjNGVkZS0wYzRiLTQyMzAtOGE5MC1jMDhmNjhlNDVkNTciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJTbWFydCBTY3JlZW5zIERlbW8vYm90ZW1pYS1pbnRyby5qcGciLCJpYXQiOjE3NzEyNTk2NjgsImV4cCI6MTgwMjc5NTY2OH0.KSQa5TdyL0ZV1sfTEFFzlhom-8WSFlieQtp5crmo6UM",
                    "caption": "",
                    "link": "",
                    "triggerMatch": [],
                    "imageSize": "400px",
                    "bgColor": "white",
                    "backdropOpacity": 0.5,
                    "showTitle": true,
                    "borderColor": "#f8c400"
                },
                {
                    "name": "Tess intro",
                    "url": "blob:https://mobilewise.netlify.app/b6930bf7-3f5c-47cd-b2f2-3b7baf784526",
                    "caption": "",
                    "link": "",
                    "triggerMatch": [
                        "Hi",
                        "I'm Tess",
                        "your web guide assistant. How can I help you today?"
                    ],
                    "imageSize": "500px",
                    "bgColor": "rgba(0,0,0,0.5)",
                    "backdropOpacity": 0.5,
                    "showTitle": true,
                    "borderColor": "#f8c400"
                }
            ]
        },
        "websiteInfo": {
            "triggers": [],
            "infoType": "navigation",
            "action": "showSmartNavigation"
        }
    },
    "updatedAt": "2026-03-15T19:59:50.211Z"
};
    
    // ===== ADD SPLASH SCREEN CSS =====
    const style = document.createElement('style');
    style.textContent = `
        .splash-avatar-container {
            width: 260px;
            height: 380px;
            margin: 0 auto 25px;
            border-radius: 20px;
            overflow: hidden;
            background: #000;
            box-shadow: 0 20px 30px rgba(0,0,0,0.5);
            border: 2px solid rgba(255,255,255,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .splash-avatar-container lemon-slice-widget {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 280px !important;
            height: 400px !important;
            max-width: none !important;
            max-height: none !important;
        }
        .splash-card {
            background: radial-gradient(circle at center, ${window.BotemiaConfig.modules?.splashScreen?.gradientCenter || '#1e4a8a'} 0%, ${window.BotemiaConfig.modules?.splashScreen?.gradientOuter || '#0a1a2f'} 80%);
            border-radius: 48px;
            padding: 40px 30px;
            max-width: 600px;
            width: 90%;
            text-align: center;
            box-shadow: 0 30px 60px rgba(0,0,0,0.6);
            animation: slideUp 0.4s ease;
        }
        .splash-card h1 {
            color: white;
            font-size: 2.5rem;
            margin-bottom: 5px;
            font-weight: 700;
        }
        .splash-card h2 {
            color: rgba(255,255,255,0.9);
            font-size: 1.2rem;
            margin-bottom: 20px;
            font-weight: 300;
        }
        .button-group {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-top: 15px;
        }
        .primary-btn, .secondary-btn {
            padding: 12px 20px;
            border-radius: 40px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            flex: 1;
            max-width: 200px;
            border: none;
            transition: all 0.2s;
        }
        .primary-btn:hover, .secondary-btn:hover {
            transform: scale(1.02);
        }
    `;
    document.head.appendChild(style);

    // ===== SPLASH SCREEN FUNCTIONS =====
    function createSplashWidget() {
        const widget = document.createElement('lemon-slice-widget');
        widget.setAttribute('agent-id', window.BotemiaConfig.modules?.splashScreen?.agentId || window.BotemiaConfig.agentId);
        widget.setAttribute('inline', '');
        widget.setAttribute('custom-minimized-width', '280');
        widget.setAttribute('custom-minimized-height', '400');
        widget.setAttribute('initial-state', 'active');
        widget.setAttribute('hide-ui', '');
        widget.id = 'splash-widget';
        return widget;
    }

    function createMainWidget() {
        const widget = document.createElement('lemon-slice-widget');
        widget.setAttribute('agent-id', window.BotemiaConfig.modules?.splashScreen?.agentId || window.BotemiaConfig.agentId);
        widget.setAttribute('custom-minimized-width', '144');
        widget.setAttribute('custom-minimized-height', '216');
        widget.setAttribute('initial-state', 'minimized');
        widget.id = 'main-widget';
        widget.style.display = 'none';
        return widget;
    }

    function showSplash() {
        const config = window.BotemiaConfig.modules?.splashScreen;
        if (!config || !config.enabled) return;

        const overlay = document.createElement('div');
        overlay.className = 'splash-overlay';
        overlay.id = 'splashOverlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(4px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
        `;

        const card = document.createElement('div');
        card.className = 'splash-card';
card.style.background = `radial-gradient(circle at center, ${config.gradientCenter || '#1e4a8a'} 0%, ${config.gradientOuter || '#0a1a2f'} 80%)`;
        
        // Build HTML with proper escaping
        let cardHTML = `
            <h1>${config.title || 'Meet Tess'}</h1>
            <h2>${config.subtitle || 'Your Personal AI Smart Guide'}</h2>
            <div class="splash-avatar-container" id="splashAvatarContainer"></div>
            <div class="button-group">
                <button class="primary-btn" id="activateTessBtn" style="background: linear-gradient(145deg, ${config.primaryButton?.gradientTop || '#f8c400'}, ${config.primaryButton?.gradientBottom || '#d4a000'}); color: ${config.primaryButton?.textColor || '#0a0f1e'};">${config.primaryButton?.text || 'Get AI help with Tess'}</button>
                <button class="secondary-btn" id="justBrowsingBtn" style="background: linear-gradient(145deg, ${config.secondaryButton?.gradientTop || '#3a4050'}, ${config.secondaryButton?.gradientBottom || '#2a2f3f'}); color: ${config.secondaryButton?.textColor || '#ffffff'};">${config.secondaryButton?.text || 'Just Browsing'}</button>
            </div>
        `;
        
        // Add branding footer if exists
        if (config.branding?.name || config.branding?.logo) {
            cardHTML += `
                <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; gap: 6px; color: rgba(255,255,255,0.4); font-size: 0.75rem;">
                    ${config.branding?.logo ? '<img src="' + config.branding.logo + '" style="height: 18px; opacity: 0.6;">' : ''}
                    ${config.branding?.name ? '<span>' + config.branding.name + '</span>' : ''}
                </div>
            `;
        }
        
        card.innerHTML = cardHTML;

        overlay.appendChild(card);
        document.body.appendChild(overlay);

        const container = document.getElementById('splashAvatarContainer');
        const splashWidget = createSplashWidget();
        container.appendChild(splashWidget);

        document.getElementById('activateTessBtn').addEventListener('click', activateTess);
        document.getElementById('justBrowsingBtn').addEventListener('click', justBrowsing);

        // Hover effects
        const primaryBtn = document.getElementById('activateTessBtn');
        primaryBtn.onmouseover = () => {
            primaryBtn.style.background = `linear-gradient(145deg, ${config.primaryButton?.hoverTop || '#ffd700'}, ${config.primaryButton?.hoverBottom || '#e0b000'})`;
            primaryBtn.style.transform = 'scale(1.02)';
        };
        primaryBtn.onmouseout = () => {
            primaryBtn.style.background = `linear-gradient(145deg, ${config.primaryButton?.gradientTop || '#f8c400'}, ${config.primaryButton?.gradientBottom || '#d4a000'})`;
            primaryBtn.style.transform = 'scale(1)';
        };

        const secondaryBtn = document.getElementById('justBrowsingBtn');
        secondaryBtn.onmouseover = () => {
            secondaryBtn.style.background = `linear-gradient(145deg, ${config.secondaryButton?.hoverTop || '#4a5060'}, ${config.secondaryButton?.hoverBottom || '#3a4050'})`;
            secondaryBtn.style.transform = 'scale(1.02)';
        };
        secondaryBtn.onmouseout = () => {
            secondaryBtn.style.background = `linear-gradient(145deg, ${config.secondaryButton?.gradientTop || '#3a4050'}, ${config.secondaryButton?.gradientBottom || '#2a2f3f'})`;
            secondaryBtn.style.transform = 'scale(1)';
        };
    }

    function activateTess() {
        const overlay = document.getElementById('splashOverlay');
        if (overlay) overlay.remove();

        if (!window.mainWidget || !document.body.contains(window.mainWidget)) {
            window.mainWidget = createMainWidget();
            document.body.appendChild(window.mainWidget);
        }
        window.mainWidget.style.display = 'block';
        setTimeout(() => {
            if (window.mainWidget) window.mainWidget.micOn();
        }, 500);
    }

    function justBrowsing() {
        const overlay = document.getElementById('splashOverlay');
        if (overlay) overlay.remove();

        if (!window.mainWidget || !document.body.contains(window.mainWidget)) {
            window.mainWidget = createMainWidget();
            document.body.appendChild(window.mainWidget);
        }
        window.mainWidget.style.display = 'block';
    }

    // ===== AUTO-TRIGGER CONTROL =====
    window.disableBridgeTriggers = false;
    
    // ===== LISTEN FOR MESSAGES FROM TCS =====
    window.addEventListener('message', function(event) {
        if (event.data.type === 'DASHBOARD_COMMAND') {
            if (event.data.command === 'toggleOverlays') {
                window.disableBridgeTriggers = event.data.disabled;
                console.log(`🔕 Overlays ${event.data.disabled ? 'disabled' : 'enabled'}`);
            }
            return;
        }
        
        if (event.data.type === 'MODULE_TRIGGERED' && !window.disableBridgeTriggers) {
            console.log('🎯 Module triggered:', event.data.module, event.data.triggerPhrase);
            window.showModule(event.data.module, event.data.triggerPhrase);
        }
    });

    // ===== SMART SCREEN DISPLAY FUNCTION =====
    window.showModule = function(moduleName, triggerPhrase) {
        console.log('🖥️ Showing module:', moduleName, triggerPhrase);
        
        const existing = document.getElementById('botemia-overlay');
        if (existing) existing.remove();

        let matchedImage = null;
        let bgColor = 'white';
        let backdropOpacity = 0.5;
        let imageSize = '400px';
        let showTitle = true;
        
        if (moduleName === 'smartScreen') {
            const images = window.BotemiaConfig.modules?.smartScreen?.images || [];
            matchedImage = images.find(img => 
                img.triggerMatch?.some(t => 
                    triggerPhrase.toLowerCase().includes(t.toLowerCase())
                )
            );
            
            if (matchedImage) {
                bgColor = matchedImage.bgColor || 'white';
                backdropOpacity = matchedImage.backdropOpacity || 0.5;
                imageSize = matchedImage.imageSize || '400px';
                showTitle = matchedImage.showTitle !== false;
            }
        }

        const backdrop = document.createElement('div');
        backdrop.id = 'botemia-overlay';
        backdrop.style.cssText = 
            'position: fixed;' +
            'top: 0; left: 0; width: 100%; height: 100%;' +
            'background: rgba(0, 0, 0, ' + backdropOpacity + ');' +
            'backdrop-filter: blur(4px);' +
            'z-index: 999998;' +
            'display: flex; align-items: center; justify-content: center;' +
            'pointer-events: none;';

        const textColor = bgColor.includes('black') || bgColor.includes('0,0,0') ? '#ffffff' : '#333333';
        const borderColor = '#f8c400';
        const closeBtnBg = bgColor.includes('black') ? '#333333' : '#f0f0f0';
        const closeBtnColor = bgColor.includes('black') ? '#ffffff' : '#333333';
        const closeBtnHover = bgColor.includes('black') ? '#555555' : '#dddddd';

        const card = document.createElement('div');
        card.style.cssText = 
            'background: ' + bgColor + ';' +
            'border-radius: 20px; padding: 30px;' +
            'max-width: ' + (imageSize === 'full' ? '90%' : imageSize) + ';' +
            'width: ' + (imageSize === 'full' ? '90%' : '100%') + ';' +
            'max-height: 80vh; overflow-y: auto;' +
            'box-shadow: 0 20px 60px rgba(0,0,0,0.3);' +
            'z-index: 999999;' +
            'font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif;' +
            'border: 3px solid ' + borderColor + ';' +
            'position: relative;' +
            'pointer-events: auto; animation: slideUp 0.3s ease;' +
            'color: ' + textColor + ';';

        const style = document.createElement('style');
        style.textContent = 
            '@keyframes slideUp {' +
            'from { transform: translateY(30px); opacity: 0; }' +
            'to { transform: translateY(0); opacity: 1; }' +
            '}';
        document.head.appendChild(style);

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✕';
        closeBtn.style.cssText = 
            'position: absolute; top: 15px; right: 15px;' +
            'background: ' + closeBtnBg + '; border: none; width: 32px; height: 32px;' +
            'border-radius: 16px; font-size: 18px; font-weight: bold; cursor: pointer;' +
            'color: ' + closeBtnColor + '; display: flex; align-items: center; justify-content: center;' +
            'transition: background 0.2s; z-index: 100000;';
        closeBtn.onmouseover = () => closeBtn.style.background = closeBtnHover;
        closeBtn.onmouseout = () => closeBtn.style.background = closeBtnBg;
        closeBtn.onclick = () => backdrop.remove();

        let content = '';

        if (moduleName === 'smartScreen' && matchedImage) {
            content = (showTitle ? '<h2 style="margin:0 0 15px 0; font-size:24px; color:' + textColor + ';">' + matchedImage.name + '</h2>' : '') +
                '<img src="' + matchedImage.url + '" style="width:100%; border-radius:12px; margin-bottom:15px; border:1px solid ' + (bgColor.includes('black') ? '#444' : '#eee') + ';">' +
                '<p style="margin:0 0 15px 0; line-height:1.5; font-size:16px; color:' + textColor + ';">' + matchedImage.caption + '</p>' +
                (matchedImage.link ? '<a href="' + matchedImage.link + '" target="_blank" style="display:inline-block; background:#f8c400; color:black; padding:12px 24px; border-radius:30px; text-decoration:none; font-weight:bold; margin-top:5px;">🔗 Learn More →</a>' : '');
        } else if (moduleName === 'smartScreen') {
            content = '<p style="color:#999;">No matching image found for "' + triggerPhrase + '"</p>';
        } else {
            content = '<h2 style="margin:0 0 15px 0; color:' + textColor + ';">⚡ ' + moduleName + ' Triggered</h2>' +
                     '<p style="color:' + textColor + ';">Trigger phrase: "' + triggerPhrase + '"</p>';
        }

        card.innerHTML = content;
        card.appendChild(closeBtn);
        backdrop.appendChild(card);
        document.body.appendChild(backdrop);

        setTimeout(() => {
            const el = document.getElementById('botemia-overlay');
            if (el) el.remove();
        }, 8000);
    };

    // ===== TESTIMONIAL GROUP DISPLAY =====
    window.showTestimonialGroup = function(group) {
        console.log('📺 Showing testimonial group:', group.name);
        alert('Showing ' + group.videos.length + ' testimonials about ' + group.category);
    };

    // ===== SINGLE VIDEO DISPLAY =====
    window.showVideo = function(video) {
        console.log('📹 Playing video:', video.name);
        alert('Playing video: ' + video.name + '\n' + video.url);
    };

    // ===== AUTO-TRIGGER SYSTEM =====
    (function initTriggerSystem() {
        console.log('🎯 Auto-trigger system active for', window.BotemiaConfig.name);
        
        let lastTriggerTime = 0;
        const TRIGGER_COOLDOWN = 5000;
        let lastProcessedText = '';
        let pendingText = '';
        let sentenceTimer = null;
        
        function processCompleteSentence(fullText) {
            if (window.disableBridgeTriggers) return;
            
            const now = Date.now();
            if (now - lastTriggerTime < TRIGGER_COOLDOWN) return;
            if (fullText === lastProcessedText) return;
            
            lastProcessedText = fullText;
            const lowerTranscript = fullText.toLowerCase();
            const modules = window.BotemiaConfig.modules;
            
            if (modules.testimonial && modules.testimonial.groups) {
                for (const group of modules.testimonial.groups) {
                    if (lowerTranscript.includes(group.triggerPhrase.toLowerCase())) {
                        lastTriggerTime = now;
                        window.showTestimonialGroup(group);
                        return;
                    }
                }
            }
            
            if (modules.videoVault && modules.videoVault.videos) {
                for (const video of modules.videoVault.videos) {
                    if (lowerTranscript.includes(video.triggerPhrase.toLowerCase())) {
                        lastTriggerTime = now;
                        window.showVideo(video);
                        return;
                    }
                }
            }
            
            if (modules.smartScreen && modules.smartScreen.images) {
                for (const image of modules.smartScreen.images) {
                    if (image.triggerMatch) {
                        for (const trigger of image.triggerMatch) {
                            if (lowerTranscript.includes(trigger.toLowerCase())) {
                                lastTriggerTime = now;
                                window.showModule('smartScreen', trigger);
                                return;
                            }
                        }
                    }
                }
            }
        }
        
        function checkForTriggers(transcript) {
            if (window.disableBridgeTriggers) return;
            
            if (sentenceTimer) clearTimeout(sentenceTimer);
            pendingText = transcript;
            
            sentenceTimer = setTimeout(() => {
                if (pendingText.trim()) {
                    processCompleteSentence(pendingText);
                    pendingText = '';
                }
            }, 800);
        }
        
        document.querySelectorAll('.message-bubble, .ai-message, .user-message, .botania-message, [class*="message"]').forEach(el => {
            el.dataset.botemiaProcessed = 'true';
        });
        
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) {
                            if (node.matches && (
                                node.matches('.message-bubble') || 
                                node.matches('.botania-message') || 
                                node.matches('.ai-message') ||
                                node.matches('.user-message') ||
                                node.matches('[class*="message"]')
                            )) {
                                if (node.textContent && !node.dataset.botemiaProcessed) {
                                    node.dataset.botemiaProcessed = 'true';
                                    checkForTriggers(node.textContent);
                                }
                            }
                            
                            if (node.querySelectorAll) {
                                node.querySelectorAll('.message-bubble, .botania-message, .ai-message, .user-message, [class*="message"]').forEach(el => {
                                    if (el.textContent && !el.dataset.botemiaProcessed) {
                                        el.dataset.botemiaProcessed = 'true';
                                        checkForTriggers(el.textContent);
                                    }
                                });
                            }
                        }
                    });
                }
            });
        });
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                observer.observe(document.body, { childList: true, subtree: true });
            });
        } else {
            observer.observe(document.body, { childList: true, subtree: true });
        }
    })();

    // ===== LOAD WIDGET =====
    function initWidget() {
        if (document.querySelector('lemon-slice-widget')) {
            console.log('✅ Widget already exists');
            return;
        }

         // Show splash screen on page load
        setTimeout(() => {
            showSplash();
        }, 100);

        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@lemonsliceai/lemon-slice-widget';
        script.type = 'module';
        script.onload = () => {
            const widget = document.createElement('lemon-slice-widget');
            widget.setAttribute('agent-id', window.BotemiaConfig.agentId);
            document.body.appendChild(widget);
            console.log('✅ Widget created for', window.BotemiaConfig.name);
        };
        script.onerror = () => console.error('❌ Failed to load widget');
        document.head.appendChild(script);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }

    console.log('✅ Botemia Bridge v5.0 loaded for', window.BotemiaConfig.name);
})();