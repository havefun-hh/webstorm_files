window.slideDataMap.set(14, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0" style="background-image:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,212,255,0.02) 2px,rgba(0,212,255,0.02) 4px),repeating-linear-gradient(90deg,transparent,transparent 2px,rgba(0,212,255,0.02) 2px,rgba(0,212,255,0.02) 4px);"></div>

    <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative z-10 flex flex-col">
      <!-- 标题 -->
      <div style="margin-bottom:22px;">
        <h2 style="font-size:36px;font-weight:900;color:#ffffff;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:6px;">资源需求 & Demo 演示</h2>
        <p style="font-size:15px;color:#8892A4;font-family:'Courier New',monospace;">// 最小化落地成本 + 真实场景验证</p>
      </div>

      <!-- 主内容区 -->
      <div style="display:flex;gap:20px;flex:1;">
        <!-- 左侧：资源需求 -->
        <div style="flex:1;display:flex;flex-direction:column;gap:14px;">
          <h3 style="font-size:20px;font-weight:700;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">资源需求清单</h3>
          <!-- 资源列表 -->
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="display:flex;align-items:flex-start;gap:12px;background:rgba(0,212,255,0.05);border:1px solid rgba(0,212,255,0.2);padding:12px 16px;border-radius:4px;">
              <span style="font-size:20px;flex-shrink:0;margin-top:2px;">🔑</span>
              <div>
                <div style="font-size:15px;font-weight:700;color:#CBD5E0;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:3px;">AI Agent 运行时账号</div>
                <div style="font-size:13px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">一个或多个 API 密钥（OpenAI / Claude / 本地大模型），按需调用，初期验证成本极低</div>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:12px;background:rgba(108,99,255,0.05);border:1px solid rgba(108,99,255,0.2);padding:12px 16px;border-radius:4px;">
              <span style="font-size:20px;flex-shrink:0;margin-top:2px;">🛠️</span>
              <div>
                <div style="font-size:15px;font-weight:700;color:#CBD5E0;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:3px;">开源平台工具</div>
                <div style="font-size:13px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">Multica（开源免费）+ spec-kit（开源免费），零商业授权费用</div>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:12px;background:rgba(0,255,136,0.05);border:1px solid rgba(0,255,136,0.18);padding:12px 16px;border-radius:4px;">
              <span style="font-size:20px;flex-shrink:0;margin-top:2px;">💻</span>
              <div>
                <div style="font-size:15px;font-weight:700;color:#CBD5E0;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:3px;">硬件要求</div>
                <div style="font-size:13px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">标准开发机即可，无特殊算力需求，无大规模基础设施投入</div>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:12px;background:rgba(251,191,36,0.05);border:1px solid rgba(251,191,36,0.18);padding:12px 16px;border-radius:4px;">
              <span style="font-size:20px;flex-shrink:0;margin-top:2px;">👤</span>
              <div>
                <div style="font-size:15px;font-weight:700;color:#CBD5E0;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:3px;">人力成本</div>
                <div style="font-size:13px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">1 名开发者即可完成搭建和日常运行，工作流搭建预计 1~2 天</div>
              </div>
            </div>
          </div>

          <!-- 成本总结 -->
          <div style="background:rgba(0,10,30,0.8);border:1.5px solid rgba(0,255,136,0.3);padding:14px 18px;border-radius:4px;margin-top:auto;display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div style="font-size:14px;color:#8892A4;font-family:'Courier New',monospace;margin-bottom:4px;">预估启动成本</div>
              <div style="font-size:24px;font-weight:900;color:#00FF88;font-family:'Montserrat',sans-serif;">极低</div>
            </div>
            <div style="font-size:32px;font-weight:900;color:#00FF88;font-family:'Montserrat',sans-serif;">≈ API 调用费</div>
          </div>
        </div>

        <!-- 右侧：Demo 占位 -->
        <div style="flex:1;display:flex;flex-direction:column;gap:14px;">
          <h3 style="font-size:20px;font-weight:700;color:#A78BFA;font-family:'Montserrat','Noto Sans SC',sans-serif;">Demo 演示</h3>
          <p style="font-size:14px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;line-height:1.6;">选用真实需求进行端到端实操：PRD → spec-kit → Multica → Agent 协作 → 代码产出完整链路验证。</p>

          <!-- 演示视频播放器 -->
          <div id="video-container" style="flex:1;border:1.5px solid rgba(167,139,250,0.35);border-radius:6px;display:flex;flex-direction:column;overflow:hidden;background:#000;position:relative;min-height:180px;">
            <video id="demo-video" preload="metadata" playsinline style="width:100%;flex:1;object-fit:contain;display:block;">
              <source src="/videos/multica演示1.mp4" type="video/mp4">
            </video>
            <!-- 播放按钮遮罩层（不覆盖底部控制栏） -->
            <div id="video-overlay" style="position:absolute;top:0;left:0;right:0;bottom:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.55);cursor:pointer;z-index:5;" onclick="(function(){var v=document.getElementById('demo-video');v.play();this.style.display='none';})()">
              <div style="width:56px;height:56px;background:rgba(167,139,250,0.9);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:10px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><polygon points="8,5 20,12 8,19"/></svg>
              </div>
              <div style="font-size:14px;font-weight:700;color:#A78BFA;font-family:'Montserrat','Noto Sans SC',sans-serif;">点击播放演示录屏</div>
            </div>
            <!-- 底部控制栏（绝对定位贴底） -->
            <div style="position:absolute;bottom:0;left:0;right:0;display:flex;align-items:center;gap:8px;padding:5px 10px;background:rgba(10,15,30,0.92);border-top:1px solid rgba(167,139,250,0.2);z-index:10;">
              <button id="video-play-btn" style="background:none;border:none;cursor:pointer;color:#A78BFA;font-size:16px;display:flex;align-items:center;" onclick="(function(){var v=document.getElementById('demo-video'),o=document.getElementById('video-overlay'),b=document.getElementById('video-play-btn');if(v.paused){v.play();o.style.display='none';b.innerHTML='<svg width=\\'14\\' height=\\'14\\' viewBox=\\'0 0 24 24\\' fill=\\'currentColor\\'><rect x=\\'6\\' y=\\'4\\' width=\\'4\\' height=\\'16\\'/><rect x=\\'14\\' y=\\'4\\' width=\\'4\\' height=\\'16\\'/></svg>';}else{v.pause();b.innerHTML='<svg width=\\'14\\' height=\\'14\\' viewBox=\\'0 0 24 24\\' fill=\\'currentColor\\'><polygon points=\\'8,5 20,12 8,19\\'/></svg>';}})()">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 20,12 8,19"/></svg>
              </button>
              <div style="flex:1;height:4px;background:rgba(167,139,250,0.2);border-radius:2px;overflow:hidden;cursor:pointer;" onclick="(function(e){var v=document.getElementById('demo-video'),r=e.currentTarget.getBoundingClientRect();v.currentTime=((e.clientX-r.left)/r.width)*v.duration;})()">
                <div id="video-progress" style="height:100%;width:0%;background:#A78BFA;border-radius:2px;transition:width 0.1s linear;"></div>
              </div>
              <button style="background:none;border:none;cursor:pointer;color:#8892A4;font-size:14px;display:flex;align-items:center;padding:2px;" onclick="document.getElementById('demo-video').requestFullscreen()" title="全屏播放">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
              </button>
            </div>
          </div>
          <script>
          (function(){
            var v=document.getElementById('demo-video');
            if(!v) return;
            v.addEventListener('timeupdate',function(){
              var p=document.getElementById('video-progress');
              if(p&&v.duration) p.style.width=(v.currentTime/v.duration*100)+'%';
            });
            v.addEventListener('play',function(){
              var o=document.getElementById('video-overlay');if(o)o.style.display='none';
              var b=document.getElementById('video-play-btn');
              if(b) b.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
            });
            v.addEventListener('pause',function(){
              var b=document.getElementById('video-play-btn');
              if(b) b.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 20,12 8,19"/></svg>';
            });
          })();
          </script>

          <!-- 工具截图占位 -->
          <div style="flex:1;border:2px dashed rgba(0,212,255,0.4);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,212,255,0.03);position:relative;min-height:180px;">
            <div style="font-size:36px;margin-bottom:12px;">📸</div>
            <div style="font-size:17px;font-weight:700;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:6px;">AI 工具试用截图</div>
            <div style="font-size:13px;color:#8892A4;font-family:'Courier New',monospace;letter-spacing:1px;">[ 待补充 · 占位区域 ]</div>
            <div style="position:absolute;top:8px;right:10px;font-size:11px;color:rgba(0,212,255,0.4);font-family:'Courier New',monospace;">PLACEHOLDER</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
