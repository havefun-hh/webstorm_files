window.slideDataMap.set(11, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0" style="background-image:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,255,136,0.02) 2px,rgba(0,255,136,0.02) 4px),repeating-linear-gradient(90deg,transparent,transparent 2px,rgba(0,255,136,0.02) 2px,rgba(0,255,136,0.02) 4px);"></div>

    <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative z-10 flex flex-col">
      <!-- 标题 -->
      <div style="margin-bottom:22px;">
        <h2 style="font-size:36px;font-weight:900;color:#ffffff;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:6px;">落地可行性</h2>
        <p style="font-size:15px;color:#8892A4;font-family:'Courier New',monospace;">// 从技术成熟度到资源门槛，全方位论证可落地性</p>
      </div>

      <!-- 阶梯递进四维度 -->
      <div style="display:flex;gap:16px;flex:1;">
        <!-- 维度 01 技术成熟度 -->
        <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px;">
            <div style="width:40px;height:40px;background:#00D4FF;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#0A1628;font-family:'Courier New',monospace;">01</div>
            <div>
              <h3 style="font-size:19px;font-weight:700;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">技术成熟度</h3>
              <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.3);padding:2px 8px;border-radius:10px;">
                <span style="width:6px;height:6px;border-radius:50%;background:#00FF88;"></span>
                <span style="font-size:12px;color:#00FF88;font-family:'Courier New',monospace;">高</span>
              </div>
            </div>
          </div>
          <p style="font-size:14px;color:#8892A4;line-height:1.7;font-family:'Inter','Noto Sans SC',sans-serif;">spec-kit 和 Multica 均为开源成熟项目，已有社区验证。当前 LLM 能力支撑代码生成、审查、测试等核心任务。<span style="color:#CBD5E0;">已完成端到端工作流实操验证</span>，证明技术方案可行。</p>
          <div style="background:rgba(0,212,255,0.06);border:1px solid rgba(0,212,255,0.2);padding:12px;border-radius:4px;margin-top:auto;">
            <div style="font-size:12px;color:#8892A4;font-family:'Courier New',monospace;">技术验证状态</div>
            <div style="font-size:22px;font-weight:900;color:#00D4FF;font-family:'Montserrat',sans-serif;">✓ 已验证</div>
          </div>
        </div>

        <!-- 维度 02 工具替换性 -->
        <div style="flex:1;display:flex;flex-direction:column;gap:10px;padding-top:24px;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px;">
            <div style="width:40px;height:40px;background:#6C63FF;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#ffffff;font-family:'Courier New',monospace;">02</div>
            <div>
              <h3 style="font-size:19px;font-weight:700;color:#6C63FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">工具替换性</h3>
              <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.3);padding:2px 8px;border-radius:10px;">
                <span style="width:6px;height:6px;border-radius:50%;background:#00FF88;"></span>
                <span style="font-size:12px;color:#00FF88;font-family:'Courier New',monospace;">高</span>
              </div>
            </div>
          </div>
          <p style="font-size:14px;color:#8892A4;line-height:1.7;font-family:'Inter','Noto Sans SC',sans-serif;">方案设计与具体工具解耦。Multica 是当前选型，未来发现更好的平台可<span style="color:#CBD5E0;">无缝替换</span>，核心 Harness Engineering 理念和工作流保持不变。</p>
          <div style="background:rgba(108,99,255,0.06);border:1px solid rgba(108,99,255,0.2);padding:12px;border-radius:4px;margin-top:auto;">
            <div style="font-size:12px;color:#8892A4;font-family:'Courier New',monospace;">方案耦合程度</div>
            <div style="font-size:22px;font-weight:900;color:#6C63FF;font-family:'Montserrat',sans-serif;">低耦合</div>
          </div>
        </div>

        <!-- 维度 03 资源门槛 -->
        <div style="flex:1;display:flex;flex-direction:column;gap:10px;padding-top:48px;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px;">
            <div style="width:40px;height:40px;background:#00FF88;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#0A1628;font-family:'Courier New',monospace;">03</div>
            <div>
              <h3 style="font-size:19px;font-weight:700;color:#00FF88;font-family:'Montserrat','Noto Sans SC',sans-serif;">资源门槛</h3>
              <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.3);padding:2px 8px;border-radius:10px;">
                <span style="width:6px;height:6px;border-radius:50%;background:#00FF88;"></span>
                <span style="font-size:12px;color:#00FF88;font-family:'Courier New',monospace;">低</span>
              </div>
            </div>
          </div>
          <p style="font-size:14px;color:#8892A4;line-height:1.7;font-family:'Inter','Noto Sans SC',sans-serif;">仅需 <span style="color:#CBD5E0;">AI Agent 运行时账号</span>（API密钥），无需大规模基础设施投入。开源工具，零授权费用，<span style="color:#CBD5E0;">个人开发者</span>即可独立搭建运行。</p>
          <div style="background:rgba(0,255,136,0.06);border:1px solid rgba(0,255,136,0.2);padding:12px;border-radius:4px;margin-top:auto;">
            <div style="font-size:12px;color:#8892A4;font-family:'Courier New',monospace;">启动成本</div>
            <div style="font-size:22px;font-weight:900;color:#00FF88;font-family:'Montserrat',sans-serif;">接近零</div>
          </div>
        </div>

        <!-- 维度 04 周期可量化 -->
        <div style="flex:1;display:flex;flex-direction:column;gap:10px;padding-top:72px;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px;">
            <div style="width:40px;height:40px;background:#FBBF24;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:900;color:#0A1628;font-family:'Courier New',monospace;">04</div>
            <div>
              <h3 style="font-size:19px;font-weight:700;color:#FBBF24;font-family:'Montserrat','Noto Sans SC',sans-serif;">周期可量化</h3>
              <div style="display:inline-flex;align-items:center;gap:5px;background:rgba(251,191,36,0.1);border:1px solid rgba(251,191,36,0.3);padding:2px 8px;border-radius:10px;">
                <span style="width:6px;height:6px;border-radius:50%;background:#FBBF24;"></span>
                <span style="font-size:12px;color:#FBBF24;font-family:'Courier New',monospace;">清晰</span>
              </div>
            </div>
          </div>
          <p style="font-size:13px;color:#8892A4;line-height:1.7;font-family:'Inter','Noto Sans SC',sans-serif;">
            <span style="color:#CBD5E0;">工作流搭建：</span> 1~2 天<br/>
            <span style="color:#CBD5E0;">首个需求跑通：</span> 1 周<br/>
            <span style="color:#CBD5E0;">团队规模化推广：</span> 1 个月
          </p>
          <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.2);padding:12px;border-radius:4px;margin-top:auto;">
            <div style="font-size:12px;color:#8892A4;font-family:'Courier New',monospace;">最快见效</div>
            <div style="font-size:22px;font-weight:900;color:#FBBF24;font-family:'Montserrat',sans-serif;">1~2 天</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
