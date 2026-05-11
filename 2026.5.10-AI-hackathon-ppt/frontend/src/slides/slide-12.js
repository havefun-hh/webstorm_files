window.slideDataMap.set(12, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <!-- 电路网格 -->
    <div class="absolute inset-0" style="background-image:linear-gradient(rgba(251,191,36,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(251,191,36,0.07) 1px,transparent 1px);background-size:50px 50px;opacity:0.4;"></div>
    <!-- 电路线条 -->
    <div class="absolute" style="top:0;left:25%;width:2px;height:33%;background:#FBBF24;opacity:0.5;"></div>
    <div class="absolute" style="top:33%;left:25%;width:25%;height:2px;background:#FBBF24;opacity:0.5;"></div>
    <div class="absolute" style="top:33%;right:25%;width:2px;height:33%;background:#FBBF24;opacity:0.5;"></div>

    <div class="absolute inset-0 flex items-center justify-center z-10">
      <div class="text-center">
        <!-- 章节编号 -->
        <div style="font-size:100px;font-weight:900;color:#FBBF24;font-family:'Courier New',monospace;border:4px solid #FBBF24;padding:10px 40px;display:inline-block;margin-bottom:30px;text-shadow:0 0 30px rgba(251,191,36,0.6);box-shadow:0 0 30px rgba(251,191,36,0.15),inset 0 0 20px rgba(251,191,36,0.05);">
          &lt;04/&gt;
        </div>
        <!-- 章节标题 -->
        <h1 style="font-size:56px;font-weight:900;color:#ffffff;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:16px;letter-spacing:4px;">预期目标</h1>
        <p style="font-size:22px;color:#FBBF24;font-family:'Inter','Noto Sans SC',sans-serif;letter-spacing:2px;">把一个人变成一支团队</p>
        <!-- 装饰脉冲点 -->
        <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-top:32px;">
          <div style="width:10px;height:10px;border-radius:50%;background:#FBBF24;animation:pulse6 1.2s ease-in-out infinite;"></div>
          <div style="width:10px;height:10px;border-radius:50%;background:#FBBF24;animation:pulse6 1.2s ease-in-out infinite;animation-delay:0.2s;"></div>
          <div style="width:10px;height:10px;border-radius:50%;background:#FBBF24;animation:pulse6 1.2s ease-in-out infinite;animation-delay:0.4s;"></div>
        </div>
      </div>
    </div>
    <style>
      @keyframes pulse6 {0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.3;transform:scale(0.7);}}
    </style>
  </div>
`);
