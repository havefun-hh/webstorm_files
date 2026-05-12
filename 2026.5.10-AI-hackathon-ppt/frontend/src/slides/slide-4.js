window.slideDataMap.set(4, `
  <div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <!-- 网格背景 -->
    <div class="absolute inset-0" style="background-image:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,212,255,0.03) 2px,rgba(0,212,255,0.03) 4px),repeating-linear-gradient(90deg,transparent,transparent 2px,rgba(0,212,255,0.03) 2px,rgba(0,212,255,0.03) 4px);"></div>

    <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative z-10 flex flex-col">
      <!-- 标题 -->
      <div style="margin-bottom:28px;">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:8px;">
          <div style="width:40px;height:40px;background:#00D4FF;display:flex;align-items:center;justify-content:center;">
            <span style="color:#0A1628;font-family:'Courier New',monospace;font-weight:900;font-size:16px;">&lt;/&gt;</span>
          </div>
          <h2 style="font-size:36px;font-weight:900;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">开发者的效率困境</h2>
        </div>
        <p style="font-size:16px;color:#8892A4;font-family:'Courier New',monospace;padding-left:54px;">// 传统研发模式下，一名开发者需独立承担全链路工作，效率瓶颈严重</p>
      </div>

      <!-- 核心背景框 -->
      <div style="background:rgba(0,10,30,0.8);border:1px solid rgba(0,212,255,0.3);padding:18px 24px;border-radius:4px;margin-bottom:20px;backdrop-filter:blur(8px);">
        <p style="color:#CBD5E0;font-size:17px;font-family:'Inter','Noto Sans SC',sans-serif;line-height:1.7;">
          当前研发模式下，一名开发者需独立承担 <span style="color:#00D4FF;font-weight:700;">需求分析、编码、Code Review、测试</span> 全链路工作。这些环节环环相扣， <span style="color:#FBBF24;font-weight:700;">全部串行压在一人身上</span>，吞吐效率天然受制于单个人力上限。
        </p>
      </div>

      <!-- 四大痛点 2x2 -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;flex:1;">
        <!-- 痛点 01 -->
        <div style="background:rgba(0,212,255,0.07);border:1px solid rgba(0,212,255,0.25);padding:20px 22px;border-radius:4px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <div style="width:32px;height:32px;background:rgba(0,212,255,0.2);border:1.5px solid #00D4FF;display:flex;align-items:center;justify-content:center;font-family:'Courier New',monospace;font-size:13px;font-weight:900;color:#00D4FF;">01</div>
            <h4 style="font-size:18px;font-weight:700;color:#00D4FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">需求拆解耗时</h4>
          </div>
          <p style="font-size:15px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;line-height:1.7;">从 PRD 理解到任务拆解，人工梳理<span style="color:#E2E8F0;">极易遗漏边界条件与异常场景</span>，导致实现偏差与频繁返工。AI 可作为第二双眼睛，系统化扫描遗漏点、补全细节。</p>
        </div>
        <!-- 痛点 02 -->
        <div style="background:rgba(108,99,255,0.07);border:1px solid rgba(108,99,255,0.25);padding:20px 22px;border-radius:4px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <div style="width:32px;height:32px;background:rgba(108,99,255,0.2);border:1.5px solid #6C63FF;display:flex;align-items:center;justify-content:center;font-family:'Courier New',monospace;font-size:13px;font-weight:900;color:#6C63FF;">02</div>
            <h4 style="font-size:18px;font-weight:700;color:#6C63FF;font-family:'Montserrat','Noto Sans SC',sans-serif;">全链路串行，人力是瓶颈</h4>
          </div>
          <p style="font-size:15px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;line-height:1.7;">Code Review、单测编写、集成测试……每个环节都不可跳过，却只能 <span style="color:#E2E8F0;">一人一步串行推进</span> ，单人的时间与精力成为整个研发链路的瓶颈。</p>
        </div>
        <!-- 痛点 03 -->
        <div style="background:rgba(0,255,136,0.06);border:1px solid rgba(0,255,136,0.2);padding:20px 22px;border-radius:4px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <div style="width:32px;height:32px;background:rgba(0,255,136,0.12);border:1.5px solid #00FF88;display:flex;align-items:center;justify-content:center;font-family:'Courier New',monospace;font-size:13px;font-weight:900;color:#00FF88;">03</div>
            <h4 style="font-size:18px;font-weight:700;color:#00FF88;font-family:'Montserrat','Noto Sans SC',sans-serif;">AI 工具单点分散</h4>
          </div>
          <p style="font-size:15px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;line-height:1.7;">各类 AI 工具各自为战，能力局限于单一环节，<span style="color:#E2E8F0;">缺乏跨角色、跨环节</span>的系统化协作能力，研发流程仍需人工串联。</p>
        </div>
        <!-- 痛点 04 -->
        <div style="background:rgba(251,191,36,0.06);border:1px solid rgba(251,191,36,0.2);padding:20px 22px;border-radius:4px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <div style="width:32px;height:32px;background:rgba(251,191,36,0.12);border:1.5px solid #FBBF24;display:flex;align-items:center;justify-content:center;font-family:'Courier New',monospace;font-size:13px;font-weight:900;color:#FBBF24;">04</div>
            <h4 style="font-size:18px;font-weight:700;color:#FBBF24;font-family:'Montserrat','Noto Sans SC',sans-serif;">知识经验难以沉淀</h4>
          </div>
          <p style="font-size:15px;color:#8892A4;font-family:'Inter','Noto Sans SC',sans-serif;line-height:1.7;">每次解决过的问题、写过的代码模式难以复用，<span style="color:#E2E8F0;">"重复造轮子"</span>现象持续消耗团队资源与时间成本。</p>
        </div>
      </div>
    </div>
  </div>
`);
