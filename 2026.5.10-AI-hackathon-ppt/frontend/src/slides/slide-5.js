window.slideDataMap.set(5, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <!-- 电路网格 -->
    <div class="absolute inset-0" style="background-image:linear-gradient(rgba(108,99,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(108,99,255,0.1) 1px,transparent 1px);background-size:50px 50px;opacity:0.4;"></div>
    <!-- 电路线条 -->
    <div class="absolute" style="top:0;left:25%;width:2px;height:33%;background:#6C63FF;opacity:0.5;"></div>
    <div class="absolute" style="top:33%;left:25%;width:25%;height:2px;background:#6C63FF;opacity:0.5;"></div>
    <div class="absolute" style="top:33%;right:25%;width:2px;height:33%;background:#6C63FF;opacity:0.5;"></div>
    <!-- 粒子点 -->
    <div class="absolute" style="top:33%;left:25%;width:10px;height:10px;border-radius:50%;background:#6C63FF;transform:translate(-50%,-50%);box-shadow:0 0 10px #6C63FF;"></div>
    <div class="absolute" style="top:33%;left:50%;width:10px;height:10px;border-radius:50%;background:#6C63FF;transform:translate(-50%,-50%);box-shadow:0 0 10px #6C63FF;"></div>

    <div class="absolute inset-0 flex items-center justify-center z-10">
      <div class="text-center">
        <!-- 章节编号 -->
        <div style="font-size:100px;font-weight:900;color:#6C63FF;font-family:'Courier New',monospace;border:4px solid #6C63FF;padding:10px 40px;display:inline-block;margin-bottom:30px;text-shadow:0 0 30px rgba(108,99,255,0.6);box-shadow:0 0 30px rgba(108,99,255,0.2),inset 0 0 20px rgba(108,99,255,0.05);">
          &lt;02/&gt;
        </div>
        <!-- 章节标题 -->
        <h1 style="font-size:56px;font-weight:900;color:#ffffff;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:16px;letter-spacing:4px;">AI 解决方案</h1>
        <p style="font-size:22px;color:#6C63FF;font-family:'Inter','Noto Sans SC',sans-serif;letter-spacing:2px;">spec-kit + Multica + 自定义工作流</p>
        <!-- 副标签 -->
        <div style="margin-top:16px;display:inline-flex;align-items:center;gap:8px;background:rgba(108,99,255,0.1);border:1px solid rgba(108,99,255,0.4);padding:6px 18px;border-radius:2px;">
          <span style="color:#6C63FF;font-family:'Courier New',monospace;font-size:14px;letter-spacing:2px;">基于 Harness Engineering 理念的系统化方案</span>
        </div>
        <!-- 装饰脉冲点 -->
        <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-top:32px;">
          <div style="width:10px;height:10px;border-radius:50%;background:#6C63FF;animation:pulse3 1.2s ease-in-out infinite;"></div>
          <div style="width:10px;height:10px;border-radius:50%;background:#6C63FF;animation:pulse3 1.2s ease-in-out infinite;animation-delay:0.2s;"></div>
          <div style="width:10px;height:10px;border-radius:50%;background:#6C63FF;animation:pulse3 1.2s ease-in-out infinite;animation-delay:0.4s;"></div>
        </div>
      </div>
    </div>
    <style>
      @keyframes pulse3 {0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.3;transform:scale(0.7);}}
    </style>
  </div>
`);
