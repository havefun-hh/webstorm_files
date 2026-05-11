window.slideDataMap.set(7, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0" style="background-image:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,212,255,0.025) 2px,rgba(0,212,255,0.025) 4px),repeating-linear-gradient(90deg,transparent,transparent 2px,rgba(0,212,255,0.025) 2px,rgba(0,212,255,0.025) 4px);"></div>

    <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative z-10 flex flex-col">
      <!-- 标题区 -->
      <div style="margin-bottom:20px;">
        <h2 style="font-size:36px;font-weight:900;color:#ffffff;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:6px;">「1+N」协作模式 — Agent 角色分工矩阵</h2>
        <p style="font-size:15px;color:#8892A4;font-family:'Courier New',monospace;">// 1 个开发者（总指挥）+ N 个专职 AI Agent = 高效研发团队</p>
      </div>

      <!-- 架构图区域 -->
      <div style="flex:1;display:flex;flex-direction:column;gap:14px;">
        <!-- 开发者（总指挥）核心 -->
        <div style="background:linear-gradient(135deg,rgba(0,212,255,0.15),rgba(0,212,255,0.05));border:2px solid #00D4FF;padding:14px 24px;border-radius:4px;display:flex;align-items:center;gap:20px;box-shadow:0 0 20px rgba(0,212,255,0.15);">
          <div style="width:52px;height:52px;background:#00D4FF;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <span style="font-size:24px;">👨‍💻</span>
          </div>
          <div style="flex:1;">
            <h3 style="font-size:20px;font-weight:900;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:4px;">开发者（总指挥）</h3>
            <p style="font-size:14px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">负责需求拆解、架构决策、关键节点 Review——仅在必要时介入，其余由 Agent 自主执行。<span style="color:#00D4FF;">执行者 → 架构师 + 指挥官</span></p>
          </div>
          <div style="width:160px;text-align:center;background:rgba(0,212,255,0.1);border:1px solid rgba(0,212,255,0.3);padding:8px 12px;border-radius:2px;">
            <div style="font-size:26px;font-weight:900;color:#00D4FF;font-family:'Courier New',monospace;">1</div>
            <div style="font-size:12px;color:#8892A4;letter-spacing:1px;">COMMANDER</div>
          </div>
        </div>

        <!-- 箭头 -->
        <div style="display:flex;justify-content:center;"><svg width="24" height="20" viewBox="0 0 24 20"><path d="M12 0 L12 14 M6 8 L12 16 L18 8" stroke="#8892A4" stroke-width="2" fill="none"/></svg></div>

        <!-- 四个 Agent 横排 -->
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:14px;">
          <!-- Code Agent -->
          <div style="background:rgba(108,99,255,0.08);border:1px solid rgba(108,99,255,0.3);padding:16px;border-radius:4px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
              <div style="width:36px;height:36px;background:rgba(108,99,255,0.25);border:1.5px solid #6C63FF;display:flex;align-items:center;justify-content:center;border-radius:50%;">
                <span style="font-size:18px;">⚡</span>
              </div>
              <div>
                <div style="font-size:15px;font-weight:700;color:#6C63FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">Code Agent</div>
                <div style="font-size:11px;color:#8892A4;font-family:'Courier New',monospace;">主力编码</div>
              </div>
            </div>
            <p style="font-size:13px;color:#8892A4;line-height:1.6;font-family:'Inter','Noto Sans SC',sans-serif;">接收 Issue 自主完成 <span style="color:#CBD5E0;">api → service → model → schema</span> 全链路代码编写</p>
          </div>
          <!-- Review Agent -->
          <div style="background:rgba(0,255,136,0.06);border:1px solid rgba(0,255,136,0.25);padding:16px;border-radius:4px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
              <div style="width:36px;height:36px;background:rgba(0,255,136,0.12);border:1.5px solid #00FF88;display:flex;align-items:center;justify-content:center;border-radius:50%;">
                <span style="font-size:18px;">🔍</span>
              </div>
              <div>
                <div style="font-size:15px;font-weight:700;color:#00FF88;font-family:'Montserrat','Noto Sans SC',sans-serif;">Review Agent</div>
                <div style="font-size:11px;color:#8892A4;font-family:'Courier New',monospace;">质量守门人</div>
              </div>
            </div>
            <p style="font-size:13px;color:#8892A4;line-height:1.6;font-family:'Inter','Noto Sans SC',sans-serif;">自动检查<span style="color:#CBD5E0;">代码规范、安全漏洞、SQL 注入</span>风险，形成标准化质量门禁</p>
          </div>
          <!-- Test Agent -->
          <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.25);padding:16px;border-radius:4px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
              <div style="width:36px;height:36px;background:rgba(251,191,36,0.12);border:1.5px solid #FBBF24;display:flex;align-items:center;justify-content:center;border-radius:50%;">
                <span style="font-size:18px;">🧪</span>
              </div>
              <div>
                <div style="font-size:15px;font-weight:700;color:#FBBF24;font-family:'Montserrat','Noto Sans SC',sans-serif;">Test Agent</div>
                <div style="font-size:11px;color:#8892A4;font-family:'Courier New',monospace;">测试工程师</div>
              </div>
            </div>
            <p style="font-size:13px;color:#8892A4;line-height:1.6;font-family:'Inter','Noto Sans SC',sans-serif;">自动生成<span style="color:#CBD5E0;">单元测试和集成测试</span>用例，覆盖核心功能路径，降低线上风险</p>
          </div>
          <!-- Ops Agent -->
          <div style="background:rgba(248,113,113,0.06);border:1px solid rgba(248,113,113,0.25);padding:16px;border-radius:4px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
              <div style="width:36px;height:36px;background:rgba(248,113,113,0.12);border:1.5px solid #F87171;display:flex;align-items:center;justify-content:center;border-radius:50%;">
                <span style="font-size:18px;">🔧</span>
              </div>
              <div>
                <div style="font-size:15px;font-weight:700;color:#F87171;font-family:'Montserrat','Noto Sans SC',sans-serif;">Ops Agent</div>
                <div style="font-size:11px;color:#8892A4;font-family:'Courier New',monospace;">运维助手</div>
              </div>
            </div>
            <p style="font-size:13px;color:#8892A4;line-height:1.6;font-family:'Inter','Noto Sans SC',sans-serif;">日志分析、错误定位、<span style="color:#CBD5E0;">数据库迁移脚本</span>生成，解放运维工作负担</p>
          </div>
        </div>

        <!-- 技能复用框 -->
        <div style="background:rgba(0,10,30,0.7);border:1px dashed rgba(0,212,255,0.3);padding:12px 20px;border-radius:4px;display:flex;align-items:center;gap:16px;">
          <span style="font-size:20px;">🔁</span>
          <div>
            <span style="font-size:14px;font-weight:700;color:#00D4FF;font-family:'Courier New',monospace;">可复用技能库（Skills）</span>
            <span style="font-size:13px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;margin-left:12px;">每个 Agent 完成的任务自动转化为团队可复用 Skill，随项目推进持续积累，</span>
            <span style="font-size:13px;color:#00FF88;font-family:'Inter','Noto Sans SC',sans-serif;">越用越强 →</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
