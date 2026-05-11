window.slideDataMap.set(1, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <!-- 网格线背景 -->
    <div class="absolute top-0 left-0 w-full h-full" style="background-image: linear-gradient(rgba(0, 212, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.08) 1px, transparent 1px); background-size: 50px 50px;"></div>
    <!-- 顶部扫描线装饰 -->
    <div class="absolute top-0 left-0 w-full h-1" style="background: linear-gradient(90deg, transparent, #00D4FF, transparent); opacity: 0.7;"></div>
    <!-- 左侧竖线 -->
    <div class="absolute top-0 left-16 w-px h-full" style="background: linear-gradient(to bottom, transparent, rgba(0,212,255,0.4), transparent);"></div>
    <div class="absolute top-0 right-16 w-px h-full" style="background: linear-gradient(to bottom, transparent, rgba(108,99,255,0.4), transparent);"></div>
    <!-- 角落装饰 -->
    <div class="absolute top-8 left-8" style="width:24px;height:24px;border-top:3px solid #00D4FF;border-left:3px solid #00D4FF;"></div>
    <div class="absolute top-8 right-8" style="width:24px;height:24px;border-top:3px solid #00D4FF;border-right:3px solid #00D4FF;"></div>
    <div class="absolute bottom-8 left-8" style="width:24px;height:24px;border-bottom:3px solid #00D4FF;border-left:3px solid #00D4FF;"></div>
    <div class="absolute bottom-8 right-8" style="width:24px;height:24px;border-bottom:3px solid #00D4FF;border-right:3px solid #00D4FF;"></div>

    <div class="absolute inset-0 flex flex-col items-center justify-center z-10">
      <!-- 系统状态标签 -->
      <div class="flex items-center gap-2 mb-8" style="background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.4);padding:6px 18px;border-radius:2px;">
        <div class="w-2 h-2 rounded-full" style="background:#00D4FF;animation:pulse 1.5s ease-in-out infinite;"></div>
        <span style="color:#00D4FF;font-family:'Courier New',monospace;font-size:13px;letter-spacing:3px;">HACKATHON · 生产关系重构赛道 · 研发提效场景</span>
      </div>

      <!-- 主标题 -->
      <div class="text-center mb-6">
        <div style="font-size:72px;font-weight:900;color:#ffffff;letter-spacing:4px;font-family:'Montserrat','Noto Sans SC',sans-serif;line-height:1.1;text-shadow:0 0 40px rgba(0,212,255,0.3);">
          「1+N」研发提效方案
        </div>
        <div style="width:200px;height:3px;background:linear-gradient(90deg,#00D4FF,#6C63FF);margin:20px auto 0;"></div>
      </div>

      <!-- 副标题 -->
      <div class="text-center mb-10">
        <div style="font-size:28px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;letter-spacing:2px;">
          Multica 驱动的 AI Agent 协作模式
        </div>
        <div style="font-size:18px;color:#00D4FF;font-family:'Courier New',monospace;margin-top:10px;letter-spacing:1px;">
          spec-kit + Multica + 自定义工作流 → Harness Engineering
        </div>
      </div>

      <!-- 核心数字 -->
      <div class="flex gap-16 mt-4">
        <div class="text-center">
          <div style="font-size:52px;font-weight:900;color:#00D4FF;font-family:'Montserrat',sans-serif;text-shadow:0 0 20px rgba(0,212,255,0.6);">1</div>
          <div style="font-size:13px;color:#8892A4;font-family:'Courier New',monospace;letter-spacing:2px;margin-top:4px;">开发者</div>
        </div>
        <div class="text-center" style="display:flex;align-items:center;">
          <span style="font-size:36px;color:#6C63FF;font-weight:900;">+</span>
        </div>
        <div class="text-center">
          <div style="font-size:52px;font-weight:900;color:#6C63FF;font-family:'Montserrat',sans-serif;text-shadow:0 0 20px rgba(108,99,255,0.6);">N</div>
          <div style="font-size:13px;color:#8892A4;font-family:'Courier New',monospace;letter-spacing:2px;margin-top:4px;">AI Agents</div>
        </div>
        <div class="text-center" style="display:flex;align-items:center;">
          <span style="font-size:36px;color:#00FF88;font-weight:900;">=</span>
        </div>
        <div class="text-center">
          <div style="font-size:52px;font-weight:900;color:#00FF88;font-family:'Montserrat',sans-serif;text-shadow:0 0 20px rgba(0,255,136,0.6);">2~3x</div>
          <div style="font-size:13px;color:#8892A4;font-family:'Courier New',monospace;letter-spacing:2px;margin-top:4px;">效率提升</div>
        </div>
      </div>

      <!-- 底部年份 -->
      <div class="absolute bottom-10" style="color:#8892A4;font-family:'Courier New',monospace;font-size:14px;letter-spacing:4px;">2026 · AI HACKATHON</div>
    </div>

    <style>
      @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} }
    </style>
  </div>
`);
