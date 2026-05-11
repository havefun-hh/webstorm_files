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
      <div style="display:flex;gap:20px;flex:1;">
        <!-- 左侧：资源需求 -->
        <div style="flex:1;display:flex;flex-direction:column;gap:14px;">
          <h3 style="font-size:20px;font-weight:700;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">资源需求清单</h3>
          <!-- 资源列表 -->
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="display:flex;align-items:flex-start;gap:12px;background:rgba(0,212,255,0.05);border:1px solid rgba(0,212,255,0.2);padding:12px 16px;border-radius:4px;">
              <span style="font-size:20px;flex-shrink:0;margin-top:2px;">🔑</span>
              <div>
                <div style="font-size:15px;font-weight:700;color:#CBD5E0;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:3px;">AI Agent 运行时账号</div>
                <div style="font-size:13px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">一个或多个 API 密钥（OpenAI / Claude / 本地大模型），按需调用，初期验证成本极低</div>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:12px;background:rgba(108,99,255,0.05);border:1px solid rgba(108,99,255,0.2);padding:12px 16px;border-radius:4px;">
              <span style="font-size:20px;flex-shrink:0;margin-top:2px;">🛠️</span>
              <div>
                <div style="font-size:15px;font-weight:700;color:#CBD5E0;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:3px;">开源平台工具</div>
                <div style="font-size:13px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">Multica（开源免费）+ spec-kit（开源免费），零商业授权费用</div>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:12px;background:rgba(0,255,136,0.05);border:1px solid rgba(0,255,136,0.18);padding:12px 16px;border-radius:4px;">
              <span style="font-size:20px;flex-shrink:0;margin-top:2px;">💻</span>
              <div>
                <div style="font-size:15px;font-weight:700;color:#CBD5E0;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:3px;">硬件要求</div>
                <div style="font-size:13px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">标准开发机即可，无特殊算力需求，无大规模基础设施投入</div>
              </div>
            </div>
            <div style="display:flex;align-items:flex-start;gap:12px;background:rgba(251,191,36,0.05);border:1px solid rgba(251,191,36,0.18);padding:12px 16px;border-radius:4px;">
              <span style="font-size:20px;flex-shrink:0;margin-top:2px;">👤</span>
              <div>
                <div style="font-size:15px;font-weight:700;color:#CBD5E0;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:3px;">人力成本</div>
                <div style="font-size:13px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;">1 名开发者即可完成搭建和日常运行，工作流搭建预计 1~2 天</div>
              </div>
            </div>
          </div>

          <!-- 成本总结 -->
          <div style="background:rgba(0,10,30,0.8);border:1.5px solid rgba(0,255,136,0.3);padding:14px 18px;border-radius:4px;margin-top:auto;display:flex;align-items:center;justify-content:space-between;">
            <div>
              <div style="font-size:14px;color:#8892A4;font-family:'Courier New',monospace;margin-bottom:4px;">预估启动成本</div>
              <div style="font-size:24px;font-weight:900;color:#00FF88;font-family:'Montserrat',sans-serif;">极低</div>
            </div>
            <div style="font-size:32px;font-weight:900;color:#00FF88;font-family:'Montserrat',sans-serif;">≈ API 调用费</div>
          </div>
        </div>

        <!-- 右侧：Demo 占位 -->
        <div style="flex:1;display:flex;flex-direction:column;gap:14px;">
          <h3 style="font-size:20px;font-weight:700;color:#A78BFA;font-family:'Montserrat','Noto Sans SC',sans-serif;">Demo 演示</h3>
          <p style="font-size:14px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;line-height:1.6;">选用真实需求进行端到端实操：PRD → spec-kit → Multica → Agent 协作 → 代码产出完整链路验证。</p>

          <!-- 演示视频占位 -->
          <div style="flex:1;border:2px dashed rgba(167,139,250,0.4);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(167,139,250,0.04);position:relative;min-height:180px;">
            <div style="font-size:36px;margin-bottom:12px;">🎬</div>
            <div style="font-size:17px;font-weight:700;color:#A78BFA;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:6px;">演示视频</div>
            <div style="font-size:13px;color:#8892A4;font-family:'Courier New',monospace;letter-spacing:1px;">[ 待补充 · 占位区域 ]</div>
            <div style="position:absolute;top:8px;right:10px;font-size:11px;color:rgba(167,139,250,0.5);font-family:'Courier New',monospace;">PLACEHOLDER</div>
          </div>

          <!-- 工具截图占位 -->
          <div style="flex:1;border:2px dashed rgba(0,212,255,0.4);border-radius:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0,212,255,0.03);position:relative;min-height:180px;">
            <div style="font-size:36px;margin-bottom:12px;">📸</div>
            <div style="font-size:17px;font-weight:700;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:6px;">AI 工具试用截图</div>
            <div style="font-size:13px;color:#8892A4;font-family:'Courier New',monospace;letter-spacing:1px;">[ 待补充 · 占位区域 ]</div>
            <div style="position:absolute;top:8px;right:10px;font-size:11px;color:rgba(0,212,255,0.4);font-family:'Courier New',monospace;">PLACEHOLDER</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
