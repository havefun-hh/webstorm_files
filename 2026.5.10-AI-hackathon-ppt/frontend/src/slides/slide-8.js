window.slideDataMap.set(8, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0" style="background-image:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,212,255,0.025) 2px,rgba(0,212,255,0.025) 4px),repeating-linear-gradient(90deg,transparent,transparent 2px,rgba(0,212,255,0.025) 2px,rgba(0,212,255,0.025) 4px);"></div>

    <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative z-10 flex flex-col">
      <!-- 标题 -->
      <div style="margin-bottom:24px;">
        <h2 style="font-size:36px;font-weight:900;color:#ffffff;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:6px;">工具选型</h2>
        <p style="font-size:15px;color:#8892A4;font-family:'Courier New',monospace;">// spec-kit + Multica — 务实的开源工具链</p>
      </div>

      <!-- 网格：左右两列 -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;flex:1;">
        <!-- 左上：spec-kit 介绍 -->
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div style="background:rgba(0,212,255,0.06);border:1px solid rgba(0,212,255,0.25);padding:20px;border-radius:4px;flex:1;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
              <div style="width:44px;height:44px;background:rgba(0,212,255,0.15);border:2px solid #00D4FF;display:flex;align-items:center;justify-content:center;border-radius:4px;font-size:22px;">📋</div>
              <div>
                <h3 style="font-size:22px;font-weight:700;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">spec-kit</h3>
                <p style="font-size:12px;color:#8892A4;font-family:'Courier New',monospace;">规约编程工具 · GitHub 官方发布 · 开源免费</p>
              </div>
            </div>
            <p style="font-size:15px;color:#8892A4;line-height:1.7;font-family:'Inter','Noto Sans SC',sans-serif;margin-bottom:12px;">将 PRD 文档转换为 <span style="color:#CBD5E0;">标准化的 story 和 task</span>，为 AI Agent 提供明确的工作指令，消除需求歧义，大幅提升任务执行准确率。</p>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <span style="padding:4px 12px;background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.3);color:#00D4FF;font-size:12px;font-family:'Courier New',monospace;border-radius:2px;">PRD → Story</span>
              <span style="padding:4px 12px;background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.3);color:#00D4FF;font-size:12px;font-family:'Courier New',monospace;border-radius:2px;">Story → Task</span>
              <span style="padding:4px 12px;background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.3);color:#00D4FF;font-size:12px;font-family:'Courier New',monospace;border-radius:2px;">结构化文档</span>
            </div>
          </div>
        </div>

        <!-- 右上：Multica 介绍 -->
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div style="background:rgba(108,99,255,0.06);border:1px solid rgba(108,99,255,0.25);padding:20px;border-radius:4px;flex:1;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
              <div style="width:44px;height:44px;background:rgba(108,99,255,0.15);border:2px solid #6C63FF;display:flex;align-items:center;justify-content:center;border-radius:4px;font-size:22px;">🤖</div>
              <div>
                <h3 style="font-size:22px;font-weight:700;color:#6C63FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">Multica</h3>
                <p style="font-size:12px;color:#8892A4;font-family:'Courier New',monospace;">开源 Agent 托管平台 · 多 Agent 协作 · 任务看板</p>
              </div>
            </div>
            <p style="font-size:15px;color:#8892A4;line-height:1.7;font-family:'Inter','Noto Sans SC',sans-serif;margin-bottom:12px;">具备 <span style="color:#CBD5E0;">任务看板交互界面</span>，支持 WebSocket 实时进度汇报、多 Agent 并行执行，方便管理和查看每个 Agent 的过程及进度。</p>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <span style="padding:4px 12px;background:rgba(108,99,255,0.1);border:1px solid rgba(108,99,255,0.3);color:#6C63FF;font-size:12px;font-family:'Courier New',monospace;border-radius:2px;">任务看板</span>
              <span style="padding:4px 12px;background:rgba(108,99,255,0.1);border:1px solid rgba(108,99,255,0.3);color:#6C63FF;font-size:12px;font-family:'Courier New',monospace;border-radius:2px;">WebSocket 实时</span>
              <span style="padding:4px 12px;background:rgba(108,99,255,0.1);border:1px solid rgba(108,99,255,0.3);color:#6C63FF;font-size:12px;font-family:'Courier New',monospace;border-radius:2px;">多 Agent 并行</span>
            </div>
          </div>
        </div>

        <!-- 左下：数字亮点 -->
        <div style="background:rgba(0,255,136,0.05);border:1px solid rgba(0,255,136,0.2);padding:18px 22px;border-radius:4px;display:flex;align-items:center;gap:20px;">
          <div style="text-center;flex-shrink:0;">
            <div style="font-size:38px;font-weight:900;color:#00FF88;font-family:'Montserrat',sans-serif;">100%</div>
            <div style="font-size:12px;color:#8892A4;font-family:'Courier New',monospace;">开源免费</div>
          </div>
          <div style="width:1px;height:50px;background:rgba(0,255,136,0.2);"></div>
          <div>
            <h4 style="font-size:16px;font-weight:700;color:#00FF88;margin-bottom:6px;font-family:'Montserrat','Noto Sans SC',sans-serif;">零商业授权成本</h4>
            <p style="font-size:13px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">spec-kit 和 Multica 均为开源工具，无需商业授权费用，个人开发者即可快速上手部署。</p>
          </div>
        </div>

        <!-- 右下：扩展性 -->
        <div style="background:rgba(251,191,36,0.05);border:1px solid rgba(251,191,36,0.2);padding:18px 22px;border-radius:4px;display:flex;align-items:center;gap:20px;">
          <div style="text-center;flex-shrink:0;">
            <div style="font-size:38px;font-weight:900;color:#FBBF24;font-family:'Montserrat',sans-serif;">∞</div>
            <div style="font-size:12px;color:#8892A4;font-family:'Courier New',monospace;">可替换性</div>
          </div>
          <div style="width:1px;height:50px;background:rgba(251,191,36,0.2);"></div>
          <div>
            <h4 style="font-size:16px;font-weight:700;color:#FBBF24;margin-bottom:6px;font-family:'Montserrat','Noto Sans SC',sans-serif;">方案与工具解耦</h4>
            <p style="font-size:13px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">spec-kit、Multica 是当前阶段的选型，未来发现更好的平台时可对应替换，Harness Engineering 核心理念和工作流保持不变。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
