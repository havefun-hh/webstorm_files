window.slideDataMap.set(15, `
  <div class="w-[1440px] h-[810px] slide-bg relative overflow-hidden">
    <!-- 电路板网格背景 -->
    <svg style="position:absolute;width:100%;height:100%;opacity:0.25;">
      <defs>
        <pattern id="circuit-grid2" x="0" y="0" width="90" height="90" patternUnits="userSpaceOnUse">
          <line x1="0" y1="45" x2="90" y2="45" stroke="#00d9ff" stroke-width="1"/>
          <line x1="45" y1="0" x2="45" y2="90" stroke="#00d9ff" stroke-width="1"/>
          <circle cx="0" cy="0" r="3" fill="#00d9ff"/>
          <circle cx="90" cy="0" r="3" fill="#00d9ff"/>
          <circle cx="0" cy="90" r="3" fill="#00d9ff"/>
          <circle cx="90" cy="90" r="3" fill="#00d9ff"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-grid2)"/>
    </svg>

    <!-- 电路节点装饰 -->
    <div style="position:absolute;top:13%;left:8%;width:72px;height:72px;border:3px solid #00d9ff;border-radius:50%;opacity:0.5;animation:pg2 2s ease-in-out infinite;"></div>
    <div style="position:absolute;top:17%;right:13%;width:54px;height:54px;border:2px solid #00ff88;border-radius:50%;opacity:0.4;animation:pg2 2.5s ease-in-out infinite 0.3s;"></div>
    <div style="position:absolute;bottom:17%;left:10%;width:63px;height:63px;border:3px solid #6C63FF;border-radius:50%;opacity:0.4;animation:pg2 2.2s ease-in-out infinite 0.6s;"></div>
    <div style="position:absolute;bottom:15%;right:15%;width:58px;height:58px;border:2px solid #FBBF24;border-radius:50%;opacity:0.5;animation:pg2 2.8s ease-in-out infinite 0.4s;"></div>

    <!-- 连接线 -->
    <svg style="position:absolute;width:100%;height:100%;opacity:0.35;">
      <line x1="13%" y1="17%" x2="82%" y2="22%" stroke="#00d9ff" stroke-width="2" stroke-dasharray="5,5">
        <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
      </line>
      <line x1="13%" y1="77%" x2="79%" y2="79%" stroke="#00ff88" stroke-width="2" stroke-dasharray="5,5">
        <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.2s" repeatCount="indefinite"/>
      </line>
    </svg>

    <!-- 内容区 -->
    <div class="absolute inset-0 flex flex-col items-center justify-center z-10">
      <div style="position:relative;padding:44px 72px;border:2px solid rgba(0,212,255,0.5);background:rgba(10,22,40,0.85);backdrop-filter:blur(10px);box-shadow:0 0 40px rgba(0,212,255,0.25),inset 0 0 20px rgba(0,212,255,0.08);">
        <!-- 四角装饰 -->
        <div style="position:absolute;top:-2px;left:-2px;width:20px;height:20px;border-top:3px solid #00D4FF;border-left:3px solid #00D4FF;"></div>
        <div style="position:absolute;top:-2px;right:-2px;width:20px;height:20px;border-top:3px solid #00D4FF;border-right:3px solid #00D4FF;"></div>
        <div style="position:absolute;bottom:-2px;left:-2px;width:20px;height:20px;border-bottom:3px solid #00D4FF;border-left:3px solid #00D4FF;"></div>
        <div style="position:absolute;bottom:-2px;right:-2px;width:20px;height:20px;border-bottom:3px solid #00D4FF;border-right:3px solid #00D4FF;"></div>

        <!-- 主文字 -->
        <div style="font-size:62px;font-weight:900;color:#ffffff;text-align:center;letter-spacing:4px;font-family:'Montserrat','Noto Sans SC',sans-serif;text-shadow:0 0 30px rgba(0,212,255,0.4);margin-bottom:14px;">
          感谢评审
        </div>
        <div style="width:200px;height:2px;background:linear-gradient(90deg,transparent,#00D4FF,transparent);margin:0 auto 18px;"></div>
        <div style="font-size:22px;font-weight:700;text-align:center;font-family:'Montserrat','Noto Sans SC',sans-serif;letter-spacing:2px;margin-bottom:6px;" style="background:linear-gradient(90deg,#00D4FF,#6C63FF);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">
          <span style="color:#00D4FF;">把一个人</span><span style="color:#8892A4;"> 变成 </span><span style="color:#6C63FF;">一支团队</span>
        </div>
        <div style="font-size:15px;text-align:center;color:#8892A4;font-family:'Courier New',monospace;letter-spacing:2px;margin-top:8px;">
          AI 黑客松 · 生产关系重构 &amp; 效率提效赛道 · 2026
        </div>
      </div>

      <!-- 发光粒子 -->
      <div style="position:absolute;top:22%;left:17%;width:8px;height:8px;background:#00D4FF;border-radius:50%;box-shadow:0 0 10px #00D4FF;animation:fp2 3s ease-in-out infinite;"></div>
      <div style="position:absolute;top:65%;right:22%;width:6px;height:6px;background:#00FF88;border-radius:50%;box-shadow:0 0 8px #00FF88;animation:fp2 3.5s ease-in-out infinite 0.5s;"></div>
      <div style="position:absolute;bottom:27%;left:27%;width:7px;height:7px;background:#6C63FF;border-radius:50%;box-shadow:0 0 10px #6C63FF;animation:fp2 4s ease-in-out infinite 1s;"></div>
    </div>

    <style>
      @keyframes pg2 {0%,100%{transform:scale(1);opacity:0.5;}50%{transform:scale(1.08);opacity:0.7;}}
      @keyframes fp2 {0%,100%{transform:translateY(0px);}50%{transform:translateY(-12px);}}
    </style>
  </div>
`);
