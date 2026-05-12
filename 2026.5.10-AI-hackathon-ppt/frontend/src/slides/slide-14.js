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
      <div style="display:flex;gap:20px;flex:1;min-height:0;overflow:hidden;">
        <!-- 左侧：资源需求 -->
        <div style="flex:1;display:flex;flex-direction:column;gap:10px;min-height:0;overflow:hidden;">
          <h3 style="font-size:20px;font-weight:700;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">资源需求清单</h3>
          <!-- 资源列表 -->
          <div style="display:flex;flex-direction:column;gap:7px;">
            <div style="display:flex;align-items:flex-start;gap:12px;background:rgba(0,212,255,0.05);border:1px solid rgba(0,212,255,0.2);padding:10px 14px;border-radius:4px;">
              <span style="font-size:18px;flex-shrink:0;margin-top:1px;">🔑</span>
              <div>
                <div style="font-size:14px;font-weight:700;color:#CBD5E0;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:2px;">AI Agent 运行时账号</div>
                <div style="font-size:12px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">一个或多个 API 密钥（OpenAI / Claude / 本地大模型），按需调用，初期验证成本极低</div>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:12px;background:rgba(108,99,255,0.05);border:1px solid rgba(108,99,255,0.2);padding:10px 14px;border-radius:4px;">
              <span style="font-size:18px;flex-shrink:0;margin-top:1px;">🛠️</span>
              <div>
                <div style="font-size:14px;font-weight:700;color:#CBD5E0;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:2px;">开源平台工具</div>
                <div style="font-size:12px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">Multica（开源免费）+ spec-kit（开源免费），零商业授权费用</div>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:12px;background:rgba(0,255,136,0.05);border:1px solid rgba(0,255,136,0.18);padding:10px 14px;border-radius:4px;">
              <span style="font-size:18px;flex-shrink:0;margin-top:1px;">💻</span>
              <div>
                <div style="font-size:14px;font-weight:700;color:#CBD5E0;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:2px;">硬件要求</div>
                <div style="font-size:12px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">标准开发机即可，无特殊算力需求，无大规模基础设施投入</div>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:12px;background:rgba(251,191,36,0.05);border:1px solid rgba(251,191,36,0.18);padding:10px 14px;border-radius:4px;">
              <span style="font-size:18px;flex-shrink:0;margin-top:1px;">👤</span>
              <div>
                <div style="font-size:14px;font-weight:700;color:#CBD5E0;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:2px;">人力成本</div>
                <div style="font-size:12px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">1 名开发者即可完成搭建和日常运行，工作流搭建预计 1~2 天</div>
              </div>
            </div>
          </div>

          <!-- 成本总结 -->
          <div style="background:rgba(0,10,30,0.8);border:1.5px solid rgba(0,255,136,0.3);padding:12px 16px;border-radius:4px;margin-top:auto;display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div style="font-size:13px;color:#8892A4;font-family:'Courier New',monospace;margin-bottom:3px;">预估启动成本</div>
              <div style="font-size:22px;font-weight:900;color:#00FF88;font-family:'Montserrat',sans-serif;">极低</div>
            </div>
            <div style="font-size:28px;font-weight:900;color:#00FF88;font-family:'Montserrat',sans-serif;">≈ API 调用费</div>
          </div>
        </div>

        <!-- 右侧：Demo -->
        <div style="flex:1;display:flex;flex-direction:column;gap:14px;">
          <h3 style="font-size:20px;font-weight:700;color:#A78BFA;font-family:'Montserrat','Noto Sans SC',sans-serif;">Demo 演示</h3>
          <p style="font-size:14px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;line-height:1.6;">选用真实需求进行端到端实操：PRD → spec-kit → Multica → Agent 协作 → 代码产出完整链路验证。</p>

          <!-- 演示视频播放器 -->
          <div id="video-container" style="flex:1;border:1.5px solid rgba(167,139,250,0.35);border-radius:6px;display:flex;flex-direction:column;overflow:hidden;background:#000;position:relative;min-height:180px;">
            <video id="demo-video" preload="metadata" playsinline style="width:100%;flex:1;object-fit:contain;display:block;">
              <source src="/videos/windows录屏.mp4" type="video/mp4">
            </video>
            <!-- 播放按钮遮罩层 -->
            <div id="video-overlay" style="position:absolute;top:0;left:0;right:0;bottom:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.55);cursor:pointer;z-index:5;" onclick="(function(){var v=document.getElementById('demo-video');v.play();this.style.display='none';})()">
              <div style="width:56px;height:56px;background:rgba(167,139,250,0.9);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:10px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><polygon points="8,5 20,12 8,19"/></svg>
              </div>
              <div style="font-size:14px;font-weight:700;color:#A78BFA;font-family:'Montserrat','Noto Sans SC',sans-serif;">点击播放演示录屏</div>
            </div>
            <!-- 底部控制栏 -->
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
              var o=document.getElementById('video-overlay');if(o)o.style.display='flex';
              var b=document.getElementById('video-play-btn');
              if(b) b.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 20,12 8,19"/></svg>';
            });
          })();
          </script>

          <!-- AI 工具试用截图 -->
          <div id="ss-area" style="flex:1;border:1.5px solid rgba(0,212,255,0.35);border-radius:6px;display:flex;flex-direction:column;overflow:hidden;background:rgba(0,10,30,0.6);position:relative;min-height:180px;">
            <img id="ss-cover" src="/assets/images/screenshots/0-使用spec-kit规约工具的chat记录.png" style="width:100%;flex:1;object-fit:cover;display:block;border-radius:5px 5px 0 0;" />
            <div id="ss-btn-area" style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,0,0,0.45);cursor:pointer;z-index:5;border-radius:6px;" onclick="document.getElementById('ss-modal').style.display='flex'">
              <div style="width:50px;height:50px;background:rgba(0,212,255,0.85);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:8px;">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#fff" stroke-width="2"/><circle cx="9" cy="10" r="2" fill="#fff"/><polyline points="16 8 21 14 16 14" fill="#fff"/></svg>
              </div>
              <div style="font-size:13px;font-weight:700;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">点击查看试用截图</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 截图预览弹窗（幻灯片根层级，覆盖整个1440x810区域） -->
    <div id="ss-modal" style="display:none;position:absolute;top:0;left:0;width:1440px;height:810px;background:rgba(0,0,0,0.92);z-index:200;flex-direction:column;align-items:center;padding:30px 50px;">
      <div style="position:absolute;top:14px;right:20px;cursor:pointer;z-index:201;color:#8892A4;font-size:22px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(255,255,255,0.08);" onclick="document.getElementById('ss-modal').style.display='none'">&#10005;</div>
      <div id="ss-title" style="font-size:18px;font-weight:700;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:14px;min-height:24px;flex-shrink:0;"></div>
      <div style="flex:1;width:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;min-height:0;">
        <img id="ss-main-img" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;box-shadow:0 4px 30px rgba(0,0,0,0.5);" />
      </div>
      <div id="ss-thumbs" style="display:flex;gap:6px;margin-top:12px;padding:6px 4px;overflow-x:auto;max-width:100%;align-items:center;flex-shrink:0;scrollbar-width:thin;scrollbar-color:rgba(0,212,255,0.4) rgba(255,255,255,0.06);"></div>
    </div>
    <script>
    (function(){
      // 注入 Webkit 自定义滚动条样式（innerHTML 不支持 <style> 伪元素）
      var s=document.createElement('style');
      s.textContent='#ss-thumbs::-webkit-scrollbar{width:6px;height:6px}#ss-thumbs::-webkit-scrollbar-track{background:rgba(0,0,0,0.25);border-radius:3px;margin:2px}#ss-thumbs::-webkit-scrollbar-thumb{background:rgba(0,212,255,0.45);border-radius:3px}#ss-thumbs::-webkit-scrollbar-thumb:hover{background:rgba(0,212,255,0.7)}';
      document.head.appendChild(s);

      var mainImg=document.getElementById('ss-main-img');
      var titleEl=document.getElementById('ss-title');
      var thumbsEl=document.getElementById('ss-thumbs');
      if(!mainImg||!titleEl||!thumbsEl) return;

      var imgs=[
        {n:'0-使用spec-kit规约工具的chat记录.png',t:'使用spec-kit规约工具的chat记录'},
        {n:'1-使用lark-cli读取飞书云文档PRD.png',t:'使用lark-cli读取飞书云文档PRD'},
        {n:'5-主issue工作过程.png',t:'主issue工作过程'},
        {n:'10-开工.png',t:'开工'},
        {n:'15-子issue状态改成Todo-1.png',t:'子issue状态改成Todo-1'},
        {n:'15-子issue状态改成Todo-2.png',t:'子issue状态改成Todo-2'},
        {n:'20-各个智能体开始干活.png',t:'各个智能体开始干活'},
        {n:'30-开发完成后交给代码review智能体.png',t:'开发完成后交给代码review智能体'},
        {n:'40-代码review智能体工作.png',t:'代码review智能体工作'},
        {n:'50-汇报进度通知.png',t:'汇报进度通知'},
        {n:'60-dataset智能体修改的代码.png',t:'dataset智能体修改的代码'},
        {n:'60-总指挥更新进度看板.png',t:'总指挥更新进度看板'},
        {n:'65-评审不通过，issue状态改回Todo重新完成.png',t:'评审不通过，issue状态改回Todo重新完成'},
        {n:'65-评审不通过，issue状态改回Todo重新完成-2.png',t:'评审不通过，issue状态改回Todo重新完成-2'},
        {n:'70-dataset智能体继续完成剩余工作.png',t:'dataset智能体继续完成剩余工作'},
        {n:'75-第二轮issue多智能体同时工作.png',t:'第二轮issue多智能体同时工作'},
        {n:'80-测试通过.png',t:'测试通过'},
        {n:'90-继续创建子issue完成后续工作.png',t:'继续创建子issue完成后续工作'}
      ];
      var base='/assets/images/screenshots/';
      var activeIdx=0;
      function showImg(idx){
        activeIdx=idx;
        mainImg.src=base+imgs[idx].n;
        titleEl.textContent=imgs[idx].t;
        var thumbs=thumbsEl.querySelectorAll('img');
        for(var i=0;i<thumbs.length;i++){
          thumbs[i].style.border=i===idx?'2px solid #00D4FF':'2px solid transparent';
          thumbs[i].style.opacity=i===idx?'1':'0.45';
          thumbs[i].style.transform=i===idx?'scale(1.08)':'scale(1)';
          thumbs[i].style.boxShadow=i===idx?'0 0 8px rgba(0,212,255,0.3)':'none';
        }
      }
      imgs.forEach(function(img,idx){
        var el=document.createElement('img');
        el.src=base+img.n;
        el.title=img.t;
        el.style.cssText='width:72px;height:46px;object-fit:cover;border-radius:4px;cursor:pointer;border:2px solid transparent;opacity:0.55;transition:all 0.2s;flex-shrink:0;';
        el.onclick=function(){showImg(idx);};
        el.onmouseenter=function(){if(idx!==activeIdx)this.style.opacity='0.9';};
        el.onmouseleave=function(){if(idx!==activeIdx)this.style.opacity='0.55';};
        thumbsEl.appendChild(el);
      });
      showImg(0);
      document.addEventListener('keydown',function(e){
        if(e.key==='Escape'){var m=document.getElementById('ss-modal');if(m)m.style.display='none';}
      });
    })();
    </script>
  </div>
`);
