window.slideDataMap.set(9, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="absolute inset-0" style="background-image:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,212,255,0.02) 2px,rgba(0,212,255,0.02) 4px),repeating-linear-gradient(90deg,transparent,transparent 2px,rgba(0,212,255,0.02) 2px,rgba(0,212,255,0.02) 4px);"></div>

    <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative z-10 flex flex-col">
      <!-- 标题 -->
      <div style="margin-bottom:22px;">
        <h2 style="font-size:36px;font-weight:900;color:#ffffff;font-family:'Montserrat','Noto Sans SC',sans-serif;margin-bottom:6px;">自定义工作流设计</h2>
        <p style="font-size:15px;color:#8892A4;font-family:'Courier New',monospace;">// PRD → 规约编程 → Agent 协作 → 质量保障 → 交付报告</p>
      </div>

      <!-- 工作流主体 -->
      <div style="flex:1;display:flex;flex-direction:column;gap:10px;">
        <!-- 步骤行 1 -->
        <div style="display:flex;gap:14px;">
          <div style="flex:1;background:rgba(0,212,255,0.06);border:1px solid rgba(0,212,255,0.25);padding:14px 18px;border-radius:4px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
              <div style="width:32px;height:32px;background:rgba(0,212,255,0.2);border:1.5px solid #00D4FF;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#00D4FF;font-family:'Courier New',monospace;border-radius:2px;">S1</div>
              <h4 style="font-size:17px;font-weight:700;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">PRD → spec-kit → 结构化开发文档</h4>
            </div>
            <p style="font-size:13px;color:#8892A4;line-height:1.6;font-family:'Inter','Noto Sans SC',sans-serif;">使用 spec-kit 将 PRD 文档拆解为 <span style="color:#CBD5E0;">story 和 task</span>，生成结构化开发文档，提交至 Multica 平台。消除需求歧义，确保 Agent 准确理解目标。</p>
          </div>
          <div style="flex:1;background:rgba(108,99,255,0.06);border:1px solid rgba(108,99,255,0.25);padding:14px 18px;border-radius:4px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
              <div style="width:32px;height:32px;background:rgba(108,99,255,0.2);border:1.5px solid #6C63FF;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#6C63FF;font-family:'Courier New',monospace;border-radius:2px;">S2</div>
              <h4 style="font-size:17px;font-weight:700;color:#6C63FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">开发总指挥分配任务</h4>
            </div>
            <p style="font-size:13px;color:#8892A4;line-height:1.6;font-family:'Inter','Noto Sans SC',sans-serif;">Multica 中的<span style="color:#CBD5E0;">总指挥 Agent</span> 接收任务后，按照职责分工将子任务智能分配给 Code / Review / Test / Ops 各专职 Agent。</p>
          </div>
        </div>

        <!-- SVG 工作流图 -->
        <div style="background:rgba(0,10,30,0.8);border:1px solid rgba(0,212,255,0.2);padding:18px 24px;border-radius:4px;">
          <svg width="100%" height="140" viewBox="0 0 1300 140" class="workflow-svg">
            <defs>
              <marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#00D4FF"/>
              </marker>
              <marker id="arr-purple" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#6C63FF"/>
              </marker>
              <marker id="arr-green" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#00FF88"/>
              </marker>
              <marker id="arr-yellow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#FBBF24"/>
              </marker>
              <marker id="arr2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#F87171"/>
              </marker>
              <!-- 流动粒子：沿路径移动的小圆点 -->
              <circle id="flow-dot-tpl" r="3" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.5s" repeatCount="indefinite"/>
              </circle>
            </defs>

            <!-- 流动动画样式 -->
            <style>
              .workflow-svg path.flow {
                stroke-dasharray: 8, 12;
                animation: flow 1.2s linear infinite;
                filter: drop-shadow(0 0 4px currentColor);
              }
              .workflow-svg path.flow-reverse {
                stroke-dasharray: 6, 10;
                animation: flow-reverse 1.8s linear infinite;
                filter: drop-shadow(0 0 4px currentColor);
              }
              @keyframes flow {
                to { stroke-dashoffset: -20; }
              }
              @keyframes flow-reverse {
                to { stroke-dashoffset: 20; }
              }
              /* 节点悬停高亮 */
              .workflow-svg .node-rect:hover {
                stroke-width: 2.5;
                filter: drop-shadow(0 0 8px currentColor);
                transition: all 0.3s ease;
              }
            </style>

            <!-- ===== 节点 ===== -->
            <!-- PRD -->
            <rect class="node-rect" x="10" y="45" width="130" height="50" rx="4" fill="#0A1628" stroke="#00D4FF" stroke-width="1.5"/>
            <text x="75" y="67" text-anchor="middle" fill="#00D4FF" font-size="13" font-weight="bold">PRD</text>
            <text x="75" y="85" text-anchor="middle" fill="#8892A4" font-size="11">需求文档</text>

            <!-- 连线1: PRD → spec-kit -->
            <path class="flow" d="M140 70 L175 70" stroke="#00D4FF" stroke-width="1.5" marker-end="url(#arr)"/>
            <!-- 流动粒子1 -->
            <circle r="3" fill="#00D4FF" opacity="0.9">
              <animateMotion dur="1.5s" repeatCount="indefinite" path="M140 70 L175 70"/>
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.5s" repeatCount="indefinite"/>
            </circle>

            <!-- spec-kit -->
            <rect class="node-rect" x="175" y="45" width="160" height="50" rx="4" fill="#0A1628" stroke="#00D4FF" stroke-width="1.5"/>
            <text x="255" y="67" text-anchor="middle" fill="#00D4FF" font-size="13" font-weight="bold">spec-kit</text>
            <text x="255" y="85" text-anchor="middle" fill="#8892A4" font-size="11">拆解为 Story/Task</text>

            <!-- 连线2: spec-kit → Multica -->
            <path class="flow" d="M335 70 L370 70" stroke="#00D4FF" stroke-width="1.5" marker-end="url(#arr)"/>
            <circle r="3" fill="#00D4FF" opacity="0.9">
              <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.2s" path="M335 70 L370 70"/>
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.5s" repeatCount="indefinite" begin="0.2s"/>
            </circle>

            <!-- Multica 总指挥 -->
            <rect class="node-rect" x="370" y="45" width="160" height="50" rx="4" fill="#0A1628" stroke="#6C63FF" stroke-width="1.5"/>
            <text x="450" y="67" text-anchor="middle" fill="#6C63FF" font-size="13" font-weight="bold">Multica 总指挥</text>
            <text x="450" y="85" text-anchor="middle" fill="#8892A4" font-size="11">分配给各 Agent</text>

            <!-- 连线3: Multica → Code Agent -->
            <path class="flow" d="M530 70 L565 70" stroke="#6C63FF" stroke-width="1.5" marker-end="url(#arr-purple)"/>
            <circle r="3" fill="#6C63FF" opacity="0.9">
              <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.4s" path="M530 70 L565 70"/>
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.5s" repeatCount="indefinite" begin="0.4s"/>
            </circle>

            <!-- Code Agent -->
            <rect class="node-rect" x="565" y="45" width="130" height="50" rx="4" fill="#0A1628" stroke="#6C63FF" stroke-width="1.5"/>
            <text x="630" y="67" text-anchor="middle" fill="#6C63FF" font-size="13" font-weight="bold">Code Agent</text>
            <text x="630" y="85" text-anchor="middle" fill="#8892A4" font-size="11">并行编码开发</text>

            <!-- 连线4: Code → Review -->
            <path class="flow" d="M695 70 L730 70" stroke="#00FF88" stroke-width="1.5" marker-end="url(#arr-green)"/>
            <circle r="3" fill="#00FF88" opacity="0.9">
              <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.6s" path="M695 70 L730 70"/>
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.5s" repeatCount="indefinite" begin="0.6s"/>
            </circle>

            <!-- Review Agent -->
            <rect class="node-rect" x="730" y="45" width="130" height="50" rx="4" fill="#0A1628" stroke="#00FF88" stroke-width="1.5"/>
            <text x="795" y="65" text-anchor="middle" fill="#00FF88" font-size="13" font-weight="bold">Review Agent</text>
            <text x="795" y="82" text-anchor="middle" fill="#8892A4" font-size="11">代码质量审查</text>

            <!-- 连线5: Review → 不通过打回 → Code（回路） -->
            <path class="flow" d="M795 45 L795 20 L630 20 L630 45" stroke="#F87171" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr2)"/>
            <!-- 回路流动粒子（沿折线运动） -->
            <circle r="3" fill="#F87171" opacity="0.8">
              <animateMotion dur="2.5s" repeatCount="indefinite" begin="1s" path="M795 45 L795 20 L630 20 L630 45"/>
              <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" begin="1s"/>
            </circle>
            <text x="715" y="14" text-anchor="middle" fill="#F87171" font-size="11">不通过 → 打回重做</text>

            <!-- 连线6: Review → Test -->
            <path class="flow" d="M860 70 L895 70" stroke="#FBBF24" stroke-width="1.5" marker-end="url(#arr-yellow)"/>
            <circle r="3" fill="#FBBF24" opacity="0.9">
              <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.8s" path="M860 70 L895 70"/>
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.5s" repeatCount="indefinite" begin="0.8s"/>
            </circle>

            <!-- Test Agent -->
            <rect class="node-rect" x="895" y="45" width="130" height="50" rx="4" fill="#0A1628" stroke="#FBBF24" stroke-width="1.5"/>
            <text x="960" y="65" text-anchor="middle" fill="#FBBF24" font-size="13" font-weight="bold">Test Agent</text>
            <text x="960" y="82" text-anchor="middle" fill="#8892A4" font-size="11">自动化测试</text>

            <!-- 连线7: Test → 不通过返回 → Code（回路） -->
            <path class="flow" d="M960 95 L960 125 L630 125 L630 95" stroke="#F87171" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr2)"/>
            <circle r="3" fill="#F87171" opacity="0.8">
              <animateMotion dur="3s" repeatCount="indefinite" begin="1.5s" path="M960 95 L960 125 L630 125 L630 95"/>
              <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" begin="1.5s"/>
            </circle>
            <text x="795" y="138" text-anchor="middle" fill="#F87171" font-size="11">测试不通过 → 返回开发</text>

            <!-- 连线8: Test → 汇报进度 -->
            <path class="flow" d="M1025 70 L1060 70" stroke="#00D4FF" stroke-width="1.5" marker-end="url(#arr)"/>
            <circle r="3" fill="#00D4FF" opacity="0.9">
              <animateMotion dur="1.5s" repeatCount="indefinite" begin="1s" path="M1025 70 L1060 70"/>
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1.5s" repeatCount="indefinite" begin="1s"/>
            </circle>

            <!-- @开发者 汇报进度 -->
            <rect class="node-rect" x="1060" y="45" width="220" height="50" rx="4" fill="#0A1628" stroke="#00D4FF" stroke-width="1.5"/>
            <text x="1170" y="65" text-anchor="middle" fill="#00D4FF" font-size="13" font-weight="bold">@开发者 汇报进度</text>
            <text x="1170" y="82" text-anchor="middle" fill="#8892A4" font-size="11">全部完成，人工 Review 决策</text>
          </svg>
        </div>

        <!-- 步骤行 3+4 -->
        <div style="display:flex;gap:14px;">
          <div style="flex:1;background:rgba(0,255,136,0.05);border:1px solid rgba(0,255,136,0.2);padding:14px 18px;border-radius:4px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
              <div style="width:32px;height:32px;background:rgba(0,255,136,0.12);border:1.5px solid #00FF88;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#00FF88;font-family:'Courier New',monospace;border-radius:2px;">S3</div>
              <h4 style="font-size:17px;font-weight:700;color:#00FF88;font-family:'Montserrat','Noto Sans SC',sans-serif;">Review + Test 双重质量闭环</h4>
            </div>
            <p style="font-size:13px;color:#8892A4;line-height:1.6;font-family:'Inter','Noto Sans SC',sans-serif;">Review Agent 审核 → <span style="color:#F87171;">不通过则打回</span>重做 → 通过后 Test Agent 验证 → <span style="color:#F87171;">不通过则返回</span>开发 → 双重质量保障。</p>
          </div>
          <div style="flex:1;background:rgba(0,212,255,0.05);border:1px solid rgba(0,212,255,0.2);padding:14px 18px;border-radius:4px;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
              <div style="width:32px;height:32px;background:rgba(0,212,255,0.12);border:1.5px solid #00D4FF;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;color:#00D4FF;font-family:'Courier New',monospace;border-radius:2px;">S4</div>
              <h4 style="font-size:17px;font-weight:700;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">无人值守 · 关键节点才介入</h4>
            </div>
            <p style="font-size:13px;color:#8892A4;line-height:1.6;font-family:'Inter','Noto Sans SC',sans-serif;">Agent 通过 <span style="color:#CBD5E0;">WebSocket 实时汇报</span>进度，遇到阻塞主动 @开发者。全部完成后汇报总进度，开发者只需关键节点审核。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
