window.slideDataMap.set(13, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0" style="background-image:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(251,191,36,0.02) 2px,rgba(251,191,36,0.02) 4px),repeating-linear-gradient(90deg,transparent,transparent 2px,rgba(251,191,36,0.02) 2px,rgba(251,191,36,0.02) 4px);"></div>

    <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative z-10 flex flex-col">
      <!-- 标题 -->
      <div style="margin-bottom:20px;">
        <h2 style="font-size:36px;font-weight:900;color:#ffffff;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:6px;">预期效果量化</h2>
        <p style="font-size:15px;color:#8892A4;font-family:'Courier New',monospace;">// 1 开发者 + N AI Agents = 2~3 人团队当量 · 量化目标驱动</p>
      </div>

      <!-- 核心目标横幅 -->
      <div style="background:linear-gradient(135deg,rgba(251,191,36,0.12),rgba(0,212,255,0.08));border:1.5px solid rgba(251,191,36,0.3);padding:14px 24px;border-radius:4px;margin-bottom:18px;display:flex;align-items:center;justify-content:space-between;">
        <div>
          <div style="font-size:20px;font-weight:900;color:#FBBF24;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:4px;">核心目标</div>
          <div style="font-size:15px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">将 1 名开发者 + AI Agent 的组合，等效为 2~3 人的开发团队</div>
        </div>
        <div style="text-align:center;background:rgba(251,191,36,0.1);border:1.5px solid rgba(251,191,36,0.4);padding:10px 24px;border-radius:4px;">
          <div style="font-size:48px;font-weight:900;color:#FBBF24;font-family:'Montserrat',sans-serif;text-shadow:0 0 20px rgba(251,191,36,0.4);">2~3x</div>
          <div style="font-size:12px;color:#8892A4;font-family:'Courier New',monospace;letter-spacing:1px;">开发效率提升目标</div>
        </div>
      </div>

      <!-- 4个 KPI 卡片 -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:14px;flex:1;">
        <!-- KPI 1 -->
        <div style="background:rgba(0,10,30,0.85);border:1px solid rgba(0,212,255,0.3);padding:18px;border-radius:4px;display:flex;flex-direction:column;gap:8px;position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#00D4FF,#6C63FF);"></div>
          <div style="font-size:13px;color:#8892A4;font-family:'Courier New',monospace;">KPI 01</div>
          <div style="font-size:42px;font-weight:900;color:#00D4FF;font-family:'Montserrat',sans-serif;text-shadow:0 0 15px rgba(0,212,255,0.4);line-height:1;">2~3x</div>
          <div style="font-size:16px;font-weight:700;color:#ffffff;font-family:'Montserrat','Noto Sans SC',sans-serif;">开发效率提升</div>
          <p style="font-size:13px;color:#8892A4;line-height:1.6;font-family:'Inter','Noto Sans SC',sans-serif;">Agent 并行处理编码、Review、测试，关键路径时间压缩 <span style="color:#CBD5E0;">50%</span> 以上，代码产出量倍增。</p>
        </div>
        <!-- KPI 2 -->
        <div style="background:rgba(0,10,30,0.85);border:1px solid rgba(108,99,255,0.3);padding:18px;border-radius:4px;display:flex;flex-direction:column;gap:8px;position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#6C63FF,#A78BFA);"></div>
          <div style="font-size:13px;color:#8892A4;font-family:'Courier New',monospace;">KPI 02</div>
          <div style="font-size:42px;font-weight:900;color:#6C63FF;font-family:'Montserrat',sans-serif;text-shadow:0 0 15px rgba(108,99,255,0.4);line-height:1;">串→并</div>
          <div style="font-size:16px;font-weight:700;color:#ffffff;font-family:'Montserrat','Noto Sans SC',sans-serif;">关键路径压缩</div>
          <p style="font-size:13px;color:#8892A4;line-height:1.6;font-family:'Inter','Noto Sans SC',sans-serif;">Review、测试等环节由 Agent <span style="color:#CBD5E0;">并行处理</span>，与编码同步推进，关键路径从串行变为并行，整体交付周期大幅缩短。</p>
        </div>
        <!-- KPI 3 -->
        <div style="background:rgba(0,10,30,0.85);border:1px solid rgba(0,255,136,0.25);padding:18px;border-radius:4px;display:flex;flex-direction:column;gap:8px;position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#00FF88,#00D4FF);"></div>
          <div style="font-size:13px;color:#8892A4;font-family:'Courier New',monospace;">KPI 03</div>
          <div style="font-size:42px;font-weight:900;color:#00FF88;font-family:'Montserrat',sans-serif;text-shadow:0 0 15px rgba(0,255,136,0.4);line-height:1;">∞</div>
          <div style="font-size:16px;font-weight:700;color:#ffffff;font-family:'Montserrat','Noto Sans SC',sans-serif;">技能库持续增长</div>
          <p style="font-size:13px;color:#8892A4;line-height:1.6;font-family:'Inter','Noto Sans SC',sans-serif;">每个 Agent 任务转化为可复用 Skill，项目推进越久，<span style="color:#CBD5E0;">团队越用越强</span>，经验资产持续积累。</p>
        </div>
        <!-- KPI 4 -->
        <div style="background:rgba(0,10,30,0.85);border:1px solid rgba(248,113,113,0.25);padding:18px;border-radius:4px;display:flex;flex-direction:column;gap:8px;position:relative;overflow:hidden;">
          <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#F87171,#FBBF24);"></div>
          <div style="font-size:13px;color:#8892A4;font-family:'Courier New',monospace;">KPI 04</div>
          <div style="font-size:42px;font-weight:900;color:#F87171;font-family:'Montserrat',sans-serif;text-shadow:0 0 15px rgba(248,113,113,0.4);line-height:1;">↓50%</div>
          <div style="font-size:16px;font-weight:700;color:#ffffff;font-family:'Montserrat','Noto Sans SC',sans-serif;">缺陷率降低</div>
          <p style="font-size:13px;color:#8892A4;line-height:1.6;font-family:'Inter','Noto Sans SC',sans-serif;">Review Agent + Test Agent <span style="color:#CBD5E0;">双重质量保障</span>机制，预期代码缺陷率降低 30%~50%，减少线上事故。</p>
        </div>
      </div>
    </div>
  </div>
`);
