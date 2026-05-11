window.slideDataMap.set(6, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <!-- 竖线装饰 -->
    <div class="absolute inset-0" style="background-image:linear-gradient(rgba(108,99,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(108,99,255,0.06) 1px,transparent 1px);background-size:50px 50px;"></div>
    <div class="absolute top-0 left-1/4 w-px h-full" style="background:linear-gradient(to bottom,transparent,rgba(0,212,255,0.3),transparent);"></div>
    <div class="absolute top-0 left-2/4 w-px h-full" style="background:linear-gradient(to bottom,transparent,rgba(108,99,255,0.2),transparent);"></div>
    <div class="absolute top-0 left-3/4 w-px h-full" style="background:linear-gradient(to bottom,transparent,rgba(0,255,136,0.2),transparent);"></div>

    <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative z-10 flex flex-col">
      <!-- 标题 -->
      <div style="text-center;margin-bottom:24px;">
        <div style="display:inline-flex;align-items:center;gap:10px;background:rgba(108,99,255,0.12);border:1px solid rgba(108,99,255,0.4);padding:5px 16px;border-radius:2px;margin-bottom:12px;">
          <div style="width:8px;height:8px;border-radius:50%;background:#6C63FF;animation:pulse4 1.5s ease-in-out infinite;"></div>
          <span style="color:#6C63FF;font-family:'Courier New',monospace;font-size:13px;letter-spacing:2px;">CORE CONCEPT</span>
        </div>
        <h2 style="font-size:38px;font-weight:900;background:linear-gradient(90deg,#00D4FF,#6C63FF,#A78BFA);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:6px;">Harness Engineering 理念</h2>
        <p style="font-size:15px;color:#8892A4;font-family:'Courier New',monospace;">// 驾驭 AI Agent，构建工程化协作体系</p>
      </div>

      <!-- 主体内容 -->
      <div style="background:rgba(0,10,30,0.8);border:1px solid rgba(0,212,255,0.25);padding:20px 26px;border-radius:4px;margin-bottom:20px;">
        <p style="color:#CBD5E0;font-size:17px;line-height:1.75;font-family:'Inter','Noto Sans SC',sans-serif;">
          <span style="color:#00D4FF;font-weight:700;">Harness（驾驭）</span>不是让 AI 替代开发者，而是让开发者成为 <span style="color:#FBBF24;font-weight:700;">"总指挥"</span>，将 AI Agent 组织成专业团队协同工作。就像驾驭一支高效的工程部队——开发者设定方向，Agent 执行实施。
        </p>
      </div>

      <!-- 三列关键点 -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;flex:1;">
        <!-- 第一列：Harness 定义 -->
        <div style="background:rgba(0,212,255,0.06);border:1px solid rgba(0,212,255,0.2);padding:20px;border-radius:4px;display:flex;flex-direction:column;gap:10px;">
          <div style="font-size:28px;">🔧</div>
          <h3 style="font-size:20px;font-weight:700;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">Harness ≠ Agent 框架</h3>
          <p style="font-size:14px;color:#8892A4;line-height:1.7;font-family:'Inter','Noto Sans SC',sans-serif;">Harness Engineering 位于 Agent 框架之上，是 <span style="color:#CBD5E0;">编排层</span>和<span style="color:#CBD5E0;">治理层</span>，负责流程设计、质量把关、决策介入。它不替代 LangChain 或 AutoGen，而是在其上构建工程化规范。</p>
        </div>
        <!-- 第二列：系统设计思维 -->
        <div style="background:rgba(108,99,255,0.06);border:1px solid rgba(108,99,255,0.2);padding:20px;border-radius:4px;display:flex;flex-direction:column;gap:10px;">
          <div style="font-size:28px;">🏗️</div>
          <h3 style="font-size:20px;font-weight:700;color:#6C63FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">Harness = 系统设计</h3>
          <p style="font-size:14px;color:#8892A4;line-height:1.7;font-family:'Inter','Noto Sans SC',sans-serif;">关注 Agent 如何 <span style="color:#CBD5E0;">协作、分工、积累可复用技能</span>，而非单个 Agent 的能力上限。每完成一个任务，团队整体能力就增长一分——越用越强。</p>
        </div>
        <!-- 第三列：趋势与价值 -->
        <div style="background:rgba(0,255,136,0.05);border:1px solid rgba(0,255,136,0.18);padding:20px;border-radius:4px;display:flex;flex-direction:column;gap:10px;">
          <div style="font-size:28px;">📈</div>
          <h3 style="font-size:20px;font-weight:700;color:#00FF88;font-family:'Montserrat','Noto Sans SC',sans-serif;">角色升级</h3>
          <p style="font-size:14px;color:#8892A4;line-height:1.7;font-family:'Inter','Noto Sans SC',sans-serif;">这是当前研发社区的 <span style="color:#CBD5E0;">主流发展方向</span>。开发者从"执行者"升级为"架构师 + 总指挥"，聚焦架构决策和质量把关，人机协作比例预计达 <span style="color:#00FF88;font-weight:700;">1:3</span> 甚至更高。</p>
        </div>
      </div>
    </div>
    <style>
      @keyframes pulse4 {0%,100%{opacity:1;}50%{opacity:0.3;}}
    </style>
  </div>
`);
