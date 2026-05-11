window.slideDataMap.set(2, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <!-- 矩阵代码背景 -->
    <div style="position:absolute;inset:0;font-family:'Courier New',monospace;font-size:13px;color:rgba(0,212,255,0.08);overflow:hidden;line-height:1.4;padding:20px;">
01000001 01001001 00100000 01000001 01000111 01000101 01001110 01010100<br/>
00110001 00101011 01001110 00100000 01101101 01101111 01100100 01100101<br/>
01001000 01000001 01010010 01001110 01000101 01010011 01010011 00100000<br/>
01010011 01110000 01100101 01100011 00101101 01001011 01101001 01110100
    </div>
    <!-- 角落装饰 -->
    <div class="absolute top-6 left-6" style="width:20px;height:20px;border-top:2px solid #00D4FF;border-left:2px solid #00D4FF;"></div>
    <div class="absolute top-6 right-6" style="width:20px;height:20px;border-top:2px solid #00D4FF;border-right:2px solid #00D4FF;"></div>
    <div class="absolute bottom-6 left-6" style="width:20px;height:20px;border-bottom:2px solid #00D4FF;border-left:2px solid #00D4FF;"></div>
    <div class="absolute bottom-6 right-6" style="width:20px;height:20px;border-bottom:2px solid #00D4FF;border-right:2px solid #00D4FF;"></div>

    <div class="w-[1350px] h-[720px] mx-auto my-[45px] flex flex-col justify-center relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-10">
        <h1 style="font-size:42px;font-weight:900;color:#00D4FF;font-family:'Courier New',monospace;text-shadow:0 0 20px rgba(0,212,255,0.5);letter-spacing:6px;">&lt; CONTENTS /&gt;</h1>
        <div style="width:120px;height:2px;margin:10px auto 0;background:linear-gradient(90deg,transparent,#00D4FF,transparent);"></div>
      </div>

      <!-- 目录列表 -->
      <div style="display:flex;flex-direction:column;gap:14px;max-width:900px;margin:0 auto;width:100%;">
        <!-- 01 -->
        <div style="display:flex;align-items:center;gap:20px;padding:14px 24px;background:rgba(0,212,255,0.06);border-left:4px solid #00D4FF;border-right:1px solid rgba(0,212,255,0.2);">
          <div style="width:52px;height:52px;background:rgba(0,212,255,0.15);border:2px solid #00D4FF;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <span style="font-size:26px;font-weight:900;color:#00D4FF;font-family:'Courier New',monospace;">01</span>
          </div>
          <div style="flex:1;">
            <div style="font-size:20px;font-weight:700;color:#00D4FF;font-family:'Courier New',monospace;margin-bottom:3px;">问题背景</div>
            <div style="font-size:14px;color:#8892A4;font-family:'Courier New',monospace;">研发痛点与效率瓶颈分析</div>
          </div>
        </div>
        <!-- 02 -->
        <div style="display:flex;align-items:center;gap:20px;padding:14px 24px;background:rgba(108,99,255,0.06);border-left:4px solid #6C63FF;border-right:1px solid rgba(108,99,255,0.2);">
          <div style="width:52px;height:52px;background:rgba(108,99,255,0.15);border:2px solid #6C63FF;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <span style="font-size:26px;font-weight:900;color:#6C63FF;font-family:'Courier New',monospace;">02</span>
          </div>
          <div style="flex:1;">
            <div style="font-size:20px;font-weight:700;color:#6C63FF;font-family:'Courier New',monospace;margin-bottom:3px;">AI 解决方案</div>
            <div style="font-size:14px;color:#8892A4;font-family:'Courier New',monospace;">spec-kit + Multica + 自定义工作流</div>
          </div>
        </div>
        <!-- 03 -->
        <div style="display:flex;align-items:center;gap:20px;padding:14px 24px;background:rgba(0,255,136,0.05);border-left:4px solid #00FF88;border-right:1px solid rgba(0,255,136,0.2);">
          <div style="width:52px;height:52px;background:rgba(0,255,136,0.12);border:2px solid #00FF88;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <span style="font-size:26px;font-weight:900;color:#00FF88;font-family:'Courier New',monospace;">03</span>
          </div>
          <div style="flex:1;">
            <div style="font-size:20px;font-weight:700;color:#00FF88;font-family:'Courier New',monospace;margin-bottom:3px;">落地可行性</div>
            <div style="font-size:14px;color:#8892A4;font-family:'Courier New',monospace;">Harness Engineering 个人探索实践</div>
          </div>
        </div>
        <!-- 04 -->
        <div style="display:flex;align-items:center;gap:20px;padding:14px 24px;background:rgba(251,191,36,0.05);border-left:4px solid #FBBF24;border-right:1px solid rgba(251,191,36,0.2);">
          <div style="width:52px;height:52px;background:rgba(251,191,36,0.12);border:2px solid #FBBF24;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <span style="font-size:26px;font-weight:900;color:#FBBF24;font-family:'Courier New',monospace;">04</span>
          </div>
          <div style="flex:1;">
            <div style="font-size:20px;font-weight:700;color:#FBBF24;font-family:'Courier New',monospace;margin-bottom:3px;">预期目标</div>
            <div style="font-size:14px;color:#8892A4;font-family:'Courier New',monospace;">量化效率提升，把一个人变成一支团队</div>
          </div>
        </div>
        <!-- 05 + 06 合并行 -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          <div style="display:flex;align-items:center;gap:16px;padding:12px 20px;background:rgba(248,113,113,0.05);border-left:4px solid #F87171;border-right:1px solid rgba(248,113,113,0.2);">
            <div style="width:46px;height:46px;background:rgba(248,113,113,0.12);border:2px solid #F87171;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <span style="font-size:22px;font-weight:900;color:#F87171;font-family:'Courier New',monospace;">05</span>
            </div>
            <div>
              <div style="font-size:18px;font-weight:700;color:#F87171;font-family:'Courier New',monospace;margin-bottom:2px;">资源需求</div>
              <div style="font-size:13px;color:#8892A4;font-family:'Courier New',monospace;">最小化落地成本</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:16px;padding:12px 20px;background:rgba(167,139,250,0.05);border-left:4px solid #A78BFA;border-right:1px solid rgba(167,139,250,0.2);">
            <div style="width:46px;height:46px;background:rgba(167,139,250,0.12);border:2px solid #A78BFA;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <span style="font-size:22px;font-weight:900;color:#A78BFA;font-family:'Courier New',monospace;">06</span>
            </div>
            <div>
              <div style="font-size:18px;font-weight:700;color:#A78BFA;font-family:'Courier New',monospace;margin-bottom:2px;">Demo 演示</div>
              <div style="font-size:13px;color:#8892A4;font-family:'Courier New',monospace;">真实场景验证</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
