const iconPaths = {
  overview:
    '<rect x="3" y="3" width="7" height="7" rx="2"></rect><rect x="14" y="3" width="7" height="7" rx="2"></rect><rect x="3" y="14" width="7" height="7" rx="2"></rect><rect x="14" y="14" width="7" height="7" rx="2"></rect>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
  receipt:
    '<path d="M4 2v20l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2V2l-2 2-2-2-2 2-2-2-2 2-2-2-2 2-2-2Z"></path><path d="M16 8h-6"></path><path d="M16 12h-6"></path><path d="M13 16h-3"></path>',
  settings:
    '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9c.14.38.37.72.68.99.31.27.71.41 1.12.41H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15Z"></path>',
  audit:
    '<path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
  help:
    '<circle cx="12" cy="12" r="10"></circle><path d="M9.1 9a3 3 0 1 1 5.83 1c0 2-3 2-3 4"></path><path d="M12 18h.01"></path>',
  menu:
    '<path d="M4 6h16M4 12h16M4 18h16"></path>',
  chevron: '<path d="m9 18 6-6-6-6"></path>',
  "chevron-down": '<path d="m6 9 6 6 6-6"></path>',
  bell:
    '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 7-3 9h18c0-2-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
  search:
    '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',
  plus: '<path d="M12 5v14M5 12h14"></path>',
  export:
    '<path d="M12 3v12"></path><path d="m7 8 5-5 5 5"></path><path d="M5 21h14a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2"></path>',
  shield:
    '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path><path d="m9 12 2 2 4-4"></path>',
  alert:
    '<path d="M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path>',
  unlock:
    '<rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
  lock:
    '<rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
  refund:
    '<path d="M3 7v6h6"></path><path d="m3 13 4.5-4.5a7 7 0 1 1 .8 10.6"></path>',
  payment:
    '<rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M2 10h20"></path><path d="M6 15h2"></path>',
  close: '<path d="M18 6 6 18M6 6l12 12"></path>',
  check: '<path d="m20 6-11 11-5-5"></path>',
  info:
    '<circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path>',
  filter:
    '<path d="M22 3H2l8 9.5V19l4 2v-8.5L22 3Z"></path>',
  refresh:
    '<path d="M20 11a8 8 0 1 0-2.34 5.66"></path><path d="M20 4v7h-7"></path>',
  arrow:
    '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
  wallet:
    '<path d="M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v10H5a3 3 0 0 1-3-3V6"></path><path d="M16 13h2"></path>',
  rules:
    '<path d="M4 21v-7"></path><path d="M4 10V3"></path><path d="M12 21v-9"></path><path d="M12 8V3"></path><path d="M20 21v-5"></path><path d="M20 12V3"></path><path d="M1 14h6"></path><path d="M9 8h6"></path><path d="M17 16h6"></path>',
  link:
    '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
  monitor:
    '<rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path>',
  empty:
    '<path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><rect x="5" y="6" width="14" height="15" rx="2"></rect><path d="M9 11h6M9 15h4"></path>',
};

function icon(name, label = "") {
  const aria = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"';
  return `<svg ${aria} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.info}</svg>`;
}

document.querySelectorAll("[data-icon]").forEach((node) => {
  node.innerHTML = icon(node.dataset.icon);
});

const projects = {
  nebula: {
    name: "星界远征 · 国服",
    badge: "N",
    currency: "CNY",
    currencySymbol: "¥",
    riskCount: 24,
    todayRefund: 12860,
    todayBlocked: 18,
    recovered: 7,
  },
  dragon: {
    name: "龙域传说 · 亚太服",
    badge: "D",
    currency: "USD",
    currencySymbol: "$",
    riskCount: 16,
    todayRefund: 6270,
    todayBlocked: 11,
    recovered: 5,
  },
  tactics: {
    name: "像素战纪 · 全球服",
    badge: "P",
    currency: "USD",
    currencySymbol: "$",
    riskCount: 31,
    todayRefund: 9630,
    todayBlocked: 23,
    recovered: 9,
  },
};

const baseUsers = [
  {
    id: "U-87924130",
    name: "Starlord_77",
    avatar: "ST",
    store: "apple",
    refund: 648,
    count: 3,
    supplement: 0,
    status: "blocked",
    score: 92,
    trigger: "累计退款金额超限",
    updated: "2026-07-29 14:32",
    country: "中国大陆",
    account: "***@icloud.com",
    order: "MTXH7K2D9J",
    firstRefund: "2026-07-27 18:26",
    lastLogin: "2026-07-29 14:31",
    device: "iPhone 16 Pro · iOS 20.0",
  },
  {
    id: "U-50192847",
    name: "飞行的橘子",
    avatar: "橘",
    store: "google",
    refund: 328,
    count: 2,
    supplement: 128,
    status: "pending",
    score: 78,
    trigger: "30 日内退款 2 笔",
    updated: "2026-07-29 13:48",
    country: "新加坡",
    account: "pla***@gmail.com",
    order: "GPA.3371-4028-1190-83812",
    firstRefund: "2026-07-24 10:06",
    lastLogin: "2026-07-29 13:47",
    device: "Pixel 10 · Android 17",
  },
  {
    id: "U-79241650",
    name: "Ares_Lee",
    avatar: "AL",
    store: "apple",
    refund: 188,
    count: 1,
    supplement: 188,
    status: "recovered",
    score: 34,
    trigger: "单笔退款金额超限",
    updated: "2026-07-29 12:16",
    country: "中国香港",
    account: "ar***@icloud.com",
    order: "MPA23JW8QP",
    firstRefund: "2026-07-28 20:41",
    lastLogin: "2026-07-29 12:20",
    device: "iPad Pro · iPadOS 20.0",
  },
  {
    id: "U-29410586",
    name: "MoonRabbit",
    avatar: "MR",
    store: "google",
    refund: 1298,
    count: 6,
    supplement: 0,
    status: "blocked",
    score: 98,
    trigger: "高频退款 + 高金额",
    updated: "2026-07-29 11:05",
    country: "日本",
    account: "moo***@gmail.com",
    order: "GPA.2280-1744-9280-64011",
    firstRefund: "2026-07-20 08:12",
    lastLogin: "2026-07-29 11:03",
    device: "Galaxy S26 · Android 17",
  },
  {
    id: "U-81650329",
    name: "北境旅人",
    avatar: "北",
    store: "apple",
    refund: 128,
    count: 1,
    supplement: 0,
    status: "observing",
    score: 58,
    trigger: "退款后快速消耗道具",
    updated: "2026-07-29 10:29",
    country: "中国大陆",
    account: "no***@icloud.com",
    order: "MSX09CZ5LN",
    firstRefund: "2026-07-29 09:52",
    lastLogin: "2026-07-29 10:27",
    device: "iPhone 15 · iOS 19.6",
  },
  {
    id: "U-43018726",
    name: "Kay_Dragon",
    avatar: "KD",
    store: "google",
    refund: 648,
    count: 4,
    supplement: 648,
    status: "recovered",
    score: 41,
    trigger: "累计退款金额超限",
    updated: "2026-07-29 09:54",
    country: "马来西亚",
    account: "kay***@gmail.com",
    order: "GPA.9920-2021-3650-48128",
    firstRefund: "2026-07-22 17:20",
    lastLogin: "2026-07-29 09:58",
    device: "Xiaomi 16 · Android 17",
  },
  {
    id: "U-30561974",
    name: "Serena.W",
    avatar: "SW",
    store: "apple",
    refund: 198,
    count: 2,
    supplement: 0,
    status: "blocked",
    score: 86,
    trigger: "7 日内重复退款",
    updated: "2026-07-29 09:12",
    country: "中国台湾",
    account: "se***@icloud.com",
    order: "MHH28BPLR4",
    firstRefund: "2026-07-25 14:03",
    lastLogin: "2026-07-29 09:11",
    device: "iPhone 16 · iOS 20.0",
  },
  {
    id: "U-67182495",
    name: "獠牙不是猫",
    avatar: "獠",
    store: "google",
    refund: 68,
    count: 1,
    supplement: 0,
    status: "observing",
    score: 49,
    trigger: "新账号首充退款",
    updated: "2026-07-29 08:37",
    country: "泰国",
    account: "fan***@gmail.com",
    order: "GPA.0152-6488-7240-16833",
    firstRefund: "2026-07-29 07:59",
    lastLogin: "2026-07-29 08:35",
    device: "OnePlus 15 · Android 17",
  },
];

const state = {
  page: "users",
  project: "nebula",
  users: structuredClone(baseUsers),
  filteredUsers: structuredClone(baseUsers),
  storeFilter: "all",
  selected: new Set(),
  activeDrawerUser: null,
  modalAction: null,
  modalTargets: [],
  configDirty: false,
};

const statusMap = {
  blocked: { label: "已封禁", className: "blocked" },
  pending: { label: "待补款", className: "pending" },
  recovered: { label: "已解封", className: "recovered" },
  observing: { label: "观察中", className: "observing" },
};

const pageTitles = {
  overview: "风险概览",
  users: "受控用户",
  refunds: "退款记录",
  config: "退款策略",
  audit: "操作日志",
};

const avatarPalette = [
  ["#0958d9", "#e6f4ff"],
  ["#531dab", "#f9f0ff"],
  ["#08979c", "#e6fffb"],
  ["#d46b08", "#fff7e6"],
  ["#389e0d", "#f6ffed"],
];

function formatMoney(value, symbol = projects[state.project].currencySymbol) {
  return `${symbol}${Number(value).toLocaleString("zh-CN", { minimumFractionDigits: 2 })}`;
}

function storeBadge(store) {
  const isApple = store === "apple";
  return `<span class="store-badge">
    <span class="store-symbol ${store}" aria-hidden="true">${isApple ? "A" : ""}</span>
    <span>${isApple ? "App Store" : "Google Play"}</span>
  </span>`;
}

function statusTag(status) {
  const item = statusMap[status];
  return `<span class="status-tag ${item.className}">${item.label}</span>`;
}

function metricCard({ label, value, sub, iconName, color, bg, trend = "" }) {
  return `<article class="metric-card" style="--metric-color:${color};--metric-bg:${bg}">
    <div class="metric-top">
      <span class="metric-icon">${icon(iconName)}</span>
      <span class="metric-label">${label}</span>
    </div>
    <div class="metric-value">${value}${trend ? `<span class="metric-trend">${trend}</span>` : ""}</div>
    <div class="metric-sub">${sub}</div>
  </article>`;
}

function pageHeading(id, title, description, actions = "") {
  return `<div class="page-heading">
    <div>
      <h1 id="${id}">${title}</h1>
      <p>${description}</p>
    </div>
    ${actions ? `<div class="heading-actions">${actions}</div>` : ""}
  </div>`;
}

function renderOverview() {
  const project = projects[state.project];
  const monthlyData = [
    [42, 30],
    [54, 38],
    [49, 36],
    [68, 48],
    [62, 44],
    [83, 57],
    [76, 51],
  ];
  document.getElementById("page-overview").innerHTML = `
    ${pageHeading(
      "overviewTitle",
      "风险概览",
      `${project.name} · 数据每 5 分钟更新`,
      `<button class="button secondary" type="button" data-action="refresh">${icon("refresh")}刷新数据</button>
       <button class="button" type="button" data-page-jump="users">${icon("arrow")}查看受控用户</button>`,
    )}
    <div class="metric-grid">
      ${metricCard({ label: "当前封禁用户", value: project.riskCount, sub: "登录拦截中", iconName: "lock", color: "#cf1322", bg: "#fff2f0", trend: "↑ 12.5%" })}
      ${metricCard({ label: "今日退款金额", value: formatMoney(project.todayRefund), sub: "较昨日增加 8.3%", iconName: "refund", color: "#d46b08", bg: "#fff7e6" })}
      ${metricCard({ label: "今日触发拦截", value: project.todayBlocked, sub: "Apple 11 · Google 7", iconName: "shield", color: "#0958d9", bg: "#e6f4ff" })}
      ${metricCard({ label: "补款解封", value: project.recovered, sub: "平均处理时长 6.2 分钟", iconName: "unlock", color: "#389e0d", bg: "#f6ffed" })}
    </div>
    <div class="insight-banner">
      <span class="insight-icon">${icon("info")}</span>
      <div>
        <strong>今日退款峰值出现在 13:00–14:00</strong>
        <p>Google Play 渠道高频退款较昨日上升 18%，建议关注新账号首充退款。</p>
      </div>
    </div>
    <div class="overview-grid">
      <article class="card chart-card">
        <div class="card-header">
          <div><h2>近 7 日退款趋势</h2><p>按检测渠道拆分退款订单数</p></div>
          <div class="chart-legend" aria-label="图表图例">
            <span class="legend-item"><span class="legend-dot"></span>App Store</span>
            <span class="legend-item"><span class="legend-dot google"></span>Google Play</span>
          </div>
        </div>
        <div class="card-body">
          <div class="chart-shell" role="img" aria-label="近 7 日退款趋势，App Store 退款量整体高于 Google Play">
            <div class="y-axis"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div>
            <div class="plot">
              ${monthlyData
                .map(
                  ([apple, google], index) => `<div class="bar-group">
                  <button class="bar" style="--value:${apple}" title="App Store ${apple} 笔" aria-label="7月${23 + index}日 App Store ${apple} 笔"></button>
                  <button class="bar google" style="--value:${google}" title="Google Play ${google} 笔" aria-label="7月${23 + index}日 Google Play ${google} 笔"></button>
                  <span class="bar-label">07-${23 + index}</span>
                </div>`,
                )
                .join("")}
            </div>
          </div>
        </div>
      </article>
      <article class="card">
        <div class="card-header">
          <div><h2>实时动态</h2><p>最近发生的关键事件</p></div>
          <button class="button link" type="button" data-page-jump="audit">全部日志</button>
        </div>
        <div class="activity-list">
          <div class="activity-item" style="--activity-color:#ff4d4f;--activity-bg:#fff2f0">
            <strong>自动封禁 3 名用户</strong>
            <p>触发“30 日累计退款 ≥ ¥300”策略</p>
            <time>2 分钟前</time>
          </div>
          <div class="activity-item" style="--activity-color:#52c41a;--activity-bg:#f6ffed">
            <strong>Ares_Lee 补款完成并解封</strong>
            <p>补款金额 ¥188.00 · App Store</p>
            <time>18 分钟前</time>
          </div>
          <div class="activity-item" style="--activity-color:#1677ff;--activity-bg:#e6f4ff">
            <strong>Google Play 对账完成</strong>
            <p>本批次同步 162 笔，新增退款 11 笔</p>
            <time>32 分钟前</time>
          </div>
          <div class="activity-item" style="--activity-color:#faad14;--activity-bg:#fffbe6">
            <strong>退款策略已更新</strong>
            <p>管理员 林晓 调整高频退款阈值</p>
            <time>1 小时前</time>
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderUserRows(users) {
  if (!users.length) {
    return `<tr><td colspan="9">
      <div class="empty-state">
        <div class="empty-state-icon">${icon("empty")}</div>
        <strong>没有找到匹配的用户</strong>
        <p>请调整筛选条件后重试</p>
      </div>
    </td></tr>`;
  }

  return users
    .map((user, index) => {
      const palette = avatarPalette[index % avatarPalette.length];
      const checked = state.selected.has(user.id);
      return `<tr class="${checked ? "selected-row" : ""}">
        <td><input class="checkbox user-check" type="checkbox" aria-label="选择 ${user.name}" data-user-id="${user.id}" ${checked ? "checked" : ""}></td>
        <td>
          <div class="user-cell">
            <span class="user-avatar" style="--avatar-color:${palette[0]};--avatar-bg:${palette[1]}">${user.avatar}</span>
            <span class="user-meta"><strong title="${user.name}">${user.name}</strong><span>${user.id}</span></span>
          </div>
        </td>
        <td>${storeBadge(user.store)}</td>
        <td><span class="money danger">${formatMoney(user.refund)}</span><span class="subtext">${user.count} 笔退款</span></td>
        <td><span class="money">${formatMoney(user.supplement)}</span><span class="subtext">${user.supplement >= user.refund ? "已补足" : `仍需 ${formatMoney(user.refund - user.supplement)}`}</span></td>
        <td>${statusTag(user.status)}</td>
        <td><span>${user.trigger}</span><span class="subtext">${user.updated}</span></td>
        <td>
          <div class="risk-score"><strong>${user.score}</strong><span class="subtext">风险分</span><div class="risk-score-line"><span style="width:${user.score}%"></span></div></div>
        </td>
        <td>
          <div class="row-actions">
            <button class="button link" type="button" data-view-user="${user.id}">详情</button>
            ${
              user.status === "blocked"
                ? `<button class="button link" type="button" data-user-action="unblock" data-user-id="${user.id}">解封</button>`
                : `<button class="button link danger-link" type="button" data-user-action="block" data-user-id="${user.id}">封禁</button>`
            }
          </div>
        </td>
      </tr>`;
    })
    .join("");
}

function renderUsers() {
  const project = projects[state.project];
  const blocked = state.users.filter((user) => user.status === "blocked").length;
  const pending = state.users.filter((user) => user.status === "pending").length;
  const recovered = state.users.filter((user) => user.status === "recovered").length;
  const selectedCount = state.selected.size;

  document.getElementById("page-users").innerHTML = `
    ${pageHeading(
      "usersTitle",
      "受控用户",
      `管理因退款触发登录拦截的用户 · ${project.name}`,
      `<button class="button secondary" type="button" data-action="export">${icon("export")}导出名单</button>
       <button class="button" type="button" data-action="manual-block">${icon("plus")}手动封禁</button>`,
    )}
    <div class="scope-strip" aria-label="退款风控链路状态">
      <div class="scope-channels">
        <span class="scope-channel"><span class="mini-platform apple">A</span>App Store</span>
        <span class="scope-channel"><span class="mini-platform google"></span>Google Play</span>
      </div>
      <span class="scope-divider" aria-hidden="true"></span>
      <div class="scope-flow">
        <strong>检测退款</strong>${icon("arrow")}
        <strong>命中策略</strong>${icon("arrow")}
        <strong>拦截登录</strong>${icon("arrow")}
        <strong>完成补款</strong>${icon("arrow")}
        <strong>恢复游戏</strong>
      </div>
      <span class="scope-mode">自动执行中</span>
    </div>
    <div class="metric-grid">
      ${metricCard({ label: "登录拦截中", value: project.riskCount, sub: "其中 5 人已提交申诉", iconName: "lock", color: "#cf1322", bg: "#fff2f0" })}
      ${metricCard({ label: "待补款", value: pending + 6, sub: "待补金额 " + formatMoney(2376), iconName: "wallet", color: "#d46b08", bg: "#fff7e6" })}
      ${metricCard({ label: "今日已解封", value: recovered + 5, sub: "补款解封率 72.4%", iconName: "unlock", color: "#389e0d", bg: "#f6ffed" })}
      ${metricCard({ label: "高风险用户", value: blocked + 9, sub: "风险分 ≥ 80", iconName: "alert", color: "#531dab", bg: "#f9f0ff" })}
    </div>
    <section class="card filter-card" aria-label="筛选条件">
      <div class="filter-row">
        <div class="filter-group">
          <label for="userSearch">搜索用户</label>
          <div class="input-wrap">
            <span class="prefix-icon">${icon("search")}</span>
            <input class="input" id="userSearch" type="search" placeholder="用户昵称 / UID / 商店订单号" autocomplete="off">
          </div>
        </div>
        <div class="filter-group">
          <label for="statusFilter">风控状态</label>
          <select class="select" id="statusFilter">
            <option value="all">全部状态</option>
            <option value="blocked">已封禁</option>
            <option value="pending">待补款</option>
            <option value="observing">观察中</option>
            <option value="recovered">已解封</option>
          </select>
        </div>
        <div class="filter-group">
          <label for="riskFilter">风险等级</label>
          <select class="select" id="riskFilter">
            <option value="all">全部等级</option>
            <option value="high">高风险（≥ 80）</option>
            <option value="medium">中风险（50–79）</option>
            <option value="low">低风险（< 50）</option>
          </select>
        </div>
        <div class="filter-actions">
          <button class="button secondary" type="button" id="resetFilters">重置</button>
          <button class="button" type="button" id="applyFilters">${icon("filter")}查询</button>
        </div>
      </div>
    </section>
    <section class="card" aria-label="受控用户列表">
      <div class="table-toolbar">
        <strong>用户列表</strong>
        <span class="muted">共 <span id="resultCount">${state.filteredUsers.length}</span> 条</span>
        <div class="segment" id="storeSegment" aria-label="商店渠道">
          <button class="${state.storeFilter === "all" ? "active" : ""}" type="button" data-store="all">全部渠道</button>
          <button class="${state.storeFilter === "apple" ? "active" : ""}" type="button" data-store="apple"><span class="mini-platform apple">A</span>App Store</button>
          <button class="${state.storeFilter === "google" ? "active" : ""}" type="button" data-store="google"><span class="mini-platform google"></span>Google Play</button>
        </div>
        <span class="toolbar-spacer"></span>
        <div class="selection-tools ${selectedCount ? "visible" : ""}" id="selectionTools">
          <span>已选 <strong id="selectedCount">${selectedCount}</strong> 项</span>
          <button class="button link danger-link" type="button" data-bulk-action="block">批量封禁</button>
          <button class="button link" type="button" data-bulk-action="unblock">批量解封</button>
        </div>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th><input class="checkbox" id="selectAll" type="checkbox" aria-label="选择全部当前用户"></th>
              <th>用户</th>
              <th>退款渠道</th>
              <th>累计退款</th>
              <th>已补款</th>
              <th>状态</th>
              <th>触发原因 / 更新时间</th>
              <th>风险</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody id="userTableBody">${renderUserRows(state.filteredUsers)}</tbody>
        </table>
      </div>
      <div class="pagination-bar">
        <span>每页 20 条</span>
        <button class="page-button" type="button" aria-label="上一页" disabled>‹</button>
        <button class="page-button active" type="button" aria-current="page">1</button>
        <button class="page-button" type="button">2</button>
        <button class="page-button" type="button">3</button>
        <button class="page-button" type="button" aria-label="下一页">›</button>
      </div>
    </section>
  `;
  bindUsersEvents();
}

function renderRefunds() {
  const refundRows = [...state.users]
    .sort((a, b) => b.refund - a.refund)
    .map(
      (user, index) => `<tr>
        <td>${index + 1}</td>
        <td><span class="money">${user.order}</span><span class="subtext">${user.updated}</span></td>
        <td><button class="button link" data-view-user="${user.id}" type="button">${user.name}</button><span class="subtext">${user.id}</span></td>
        <td>${storeBadge(user.store)}</td>
        <td><span class="money danger">${formatMoney(user.refund)}</span></td>
        <td><span class="status-tag success">校验成功</span></td>
        <td>${user.trigger}</td>
        <td><button class="button link" type="button" data-view-user="${user.id}">查看关联用户</button></td>
      </tr>`,
    )
    .join("");

  document.getElementById("page-refunds").innerHTML = `
    ${pageHeading(
      "refundsTitle",
      "退款记录",
      `汇总 Apple App Store 与 Google Play 的已确认退款 · ${projects[state.project].name}`,
      `<button class="button secondary" type="button" data-action="sync">${icon("refresh")}立即同步</button>
       <button class="button" type="button" data-action="export">${icon("export")}导出记录</button>`,
    )}
    <div class="insight-banner">
      <span class="insight-icon">${icon("link")}</span>
      <div>
        <strong>双渠道数据链路正常</strong>
        <p>App Store Server Notifications 与 Google Play Voided Purchases 最近一次校验均成功。</p>
      </div>
    </div>
    <section class="card filter-card">
      <div class="filter-row">
        <div class="filter-group">
          <label for="refundSearch">搜索退款订单</label>
          <div class="input-wrap">
            <span class="prefix-icon">${icon("search")}</span>
            <input class="input" id="refundSearch" type="search" placeholder="商店订单号 / UID / 用户昵称">
          </div>
        </div>
        <div class="filter-group">
          <label for="refundStore">商店渠道</label>
          <select class="select" id="refundStore"><option>全部渠道</option><option>App Store</option><option>Google Play</option></select>
        </div>
        <div class="filter-group">
          <label for="refundDate">退款时间</label>
          <select class="select" id="refundDate"><option>最近 7 天</option><option>最近 30 天</option><option>本月</option></select>
        </div>
        <div class="filter-actions"><button class="button" type="button" data-action="refund-query">${icon("filter")}查询</button></div>
      </div>
    </section>
    <section class="card">
      <div class="table-toolbar"><strong>退款流水</strong><span class="muted">今日新增 24 笔</span></div>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>#</th><th>退款订单 / 时间</th><th>关联用户</th><th>退款渠道</th><th>退款金额</th><th>校验状态</th><th>风控结果</th><th>操作</th></tr></thead>
          <tbody>${refundRows}</tbody>
        </table>
      </div>
      <div class="pagination-bar"><span>共 248 条</span><button class="page-button active" type="button">1</button><button class="page-button" type="button">2</button><button class="page-button" type="button">3</button></div>
    </section>
  `;
}

function renderConfig() {
  document.getElementById("page-config").innerHTML = `
    ${pageHeading(
      "configTitle",
      "退款策略",
      `策略仅对 ${projects[state.project].name} 生效，不影响其他游戏项目`,
      `<button class="button secondary" type="button" data-action="history">${icon("audit")}变更历史</button>`,
    )}
    <div class="insight-banner">
      <span class="insight-icon">${icon("shield")}</span>
      <div>
        <strong>当前策略：自动执行</strong>
        <p>检测到满足阈值的退款后将在 1 分钟内拦截登录，补款达到规则要求后自动恢复。</p>
      </div>
    </div>
    <div class="config-layout">
      <nav class="card config-nav" aria-label="策略设置导航">
        <button class="active" type="button" data-config-tab="trigger">${icon("rules")}封禁触发规则</button>
        <button type="button" data-config-tab="recovery">${icon("unlock")}补款解封规则</button>
        <button type="button" data-config-tab="channels">${icon("link")}渠道接入状态</button>
        <button type="button" data-config-tab="execution">${icon("monitor")}执行与通知</button>
      </nav>
      <div class="config-content">
        <section class="config-section active" id="config-trigger">
          <article class="card config-card">
            <div class="card-header"><div><h2>封禁触发条件</h2><p>任一启用条件满足时，系统将用户标记为退款风险用户</p></div></div>
            <div class="card-body">
              <div class="rule-row">
                <div class="rule-label"><strong>单笔退款金额</strong><span>单笔退款达到此金额时触发封禁</span></div>
                <div class="rule-control">
                  <span>≥</span>
                  <div class="number-field"><input class="number-input config-input" type="number" value="128" min="1" aria-label="单笔退款金额阈值"><span class="suffix">元</span></div>
                  <label class="switch"><input class="config-input" type="checkbox" checked aria-label="启用单笔退款金额规则"><span class="switch-track"></span></label>
                </div>
              </div>
              <div class="rule-row">
                <div class="rule-label"><strong>累计退款金额</strong><span>滚动周期内累计退款达到此金额</span></div>
                <div class="rule-control">
                  <span>30 天内 ≥</span>
                  <div class="number-field"><input class="number-input config-input" type="number" value="300" min="1" aria-label="累计退款金额阈值"><span class="suffix">元</span></div>
                  <label class="switch"><input class="config-input" type="checkbox" checked aria-label="启用累计退款金额规则"><span class="switch-track"></span></label>
                </div>
              </div>
              <div class="rule-row">
                <div class="rule-label"><strong>累计退款笔数</strong><span>小额高频退款也会被识别</span></div>
                <div class="rule-control">
                  <span>30 天内 ≥</span>
                  <div class="number-field"><input class="number-input config-input" type="number" value="2" min="1" aria-label="累计退款笔数阈值"><span class="suffix">笔</span></div>
                  <label class="switch"><input class="config-input" type="checkbox" checked aria-label="启用累计退款笔数规则"><span class="switch-track"></span></label>
                </div>
              </div>
              <div class="rule-row">
                <div class="rule-label"><strong>退款后资产消耗</strong><span>退款商品已被使用或转移时提高风险等级</span></div>
                <div class="rule-control">
                  <span>自动升为高风险</span>
                  <label class="switch"><input class="config-input" type="checkbox" checked aria-label="启用退款后资产消耗规则"><span class="switch-track"></span></label>
                </div>
              </div>
            </div>
          </article>
          <article class="card config-card">
            <div class="card-header"><div><h2>低额退款豁免</h2><p>降低误封，满足条件的订单仅记录、不拦截</p></div></div>
            <div class="card-body">
              <div class="rule-row">
                <div class="rule-label"><strong>首次低额退款</strong><span>账号历史首次退款且金额低于阈值时豁免</span></div>
                <div class="rule-control">
                  <span>低于</span>
                  <div class="number-field"><input class="number-input config-input" type="number" value="30" min="0" aria-label="低额退款豁免阈值"><span class="suffix">元</span></div>
                  <label class="switch"><input class="config-input" type="checkbox" checked aria-label="启用首次低额退款豁免"><span class="switch-track"></span></label>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section class="config-section" id="config-recovery">
          <article class="card config-card">
            <div class="card-header"><div><h2>补款金额计算</h2><p>定义用户需要补缴的金额，以及满足条件后的处理方式</p></div></div>
            <div class="card-body">
              <div class="radio-stack" id="recoveryRadio">
                <label class="radio-option selected">
                  <input class="config-input" type="radio" name="recovery" value="full" checked>
                  <span><strong>补足全部未追回退款金额</strong><span>推荐。补款金额 = 累计退款金额 - 已补款金额</span></span>
                </label>
                <label class="radio-option">
                  <input class="config-input" type="radio" name="recovery" value="fixed">
                  <span><strong>补足固定比例</strong><span>适合提供一次性减免，达到设置比例即可解封</span></span>
                </label>
                <label class="radio-option">
                  <input class="config-input" type="radio" name="recovery" value="manual">
                  <span><strong>人工审核后解封</strong><span>补款完成后进入待审核队列，由运营确认</span></span>
                </label>
              </div>
              <div class="rule-row" style="margin-top:18px">
                <div class="rule-label"><strong>最低补款金额</strong><span>低于此金额仍保持登录拦截</span></div>
                <div class="rule-control">
                  <div class="number-field"><input class="number-input config-input" type="number" value="30" min="0" aria-label="最低补款金额"><span class="suffix">元</span></div>
                </div>
              </div>
              <div class="rule-row">
                <div class="rule-label"><strong>补款完成后自动解封</strong><span>支付结果校验成功后即时恢复游戏登录</span></div>
                <div class="rule-control">
                  <span>预计 1 分钟内生效</span>
                  <label class="switch"><input class="config-input" type="checkbox" checked aria-label="启用补款后自动解封"><span class="switch-track"></span></label>
                </div>
              </div>
              <div class="rule-row">
                <div class="rule-label"><strong>二次退款加重处理</strong><span>已补款解封用户再次退款时，禁止自动解封</span></div>
                <div class="rule-control">
                  <label class="switch"><input class="config-input" type="checkbox" checked aria-label="启用二次退款加重处理"><span class="switch-track"></span></label>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section class="config-section" id="config-channels">
          <article class="card config-card">
            <div class="card-header"><div><h2>商店渠道接入</h2><p>查看退款通知、补单校验和同步任务的运行状态</p></div></div>
            <div class="card-body">
              <div class="channel-grid">
                <div class="channel-card">
                  <div class="channel-head">
                    <span class="store-symbol apple">A</span>
                    <div><h3>Apple App Store</h3><p>App Store Server Notifications V2</p></div>
                    <span class="status-tag success channel-state">运行正常</span>
                  </div>
                  <div class="channel-stats">
                    <div><span>最后同步</span><strong>1 分钟前</strong></div>
                    <div><span>24h 成功率</span><strong>99.99%</strong></div>
                    <div><span>今日通知</span><strong>128 条</strong></div>
                    <div><span>待重试</span><strong>0 条</strong></div>
                  </div>
                </div>
                <div class="channel-card">
                  <div class="channel-head">
                    <span class="store-symbol google"></span>
                    <div><h3>Google Play</h3><p>Voided Purchases API</p></div>
                    <span class="status-tag success channel-state">运行正常</span>
                  </div>
                  <div class="channel-stats">
                    <div><span>最后同步</span><strong>3 分钟前</strong></div>
                    <div><span>24h 成功率</span><strong>99.96%</strong></div>
                    <div><span>今日通知</span><strong>86 条</strong></div>
                    <div><span>待重试</span><strong>1 条</strong></div>
                  </div>
                </div>
              </div>
              <div class="rule-row" style="margin-top:18px">
                <div class="rule-label"><strong>漏单扫描频率</strong><span>主动拉取商店侧记录，用于补偿通知丢失</span></div>
                <div class="rule-control">
                  <select class="select config-input" style="width:160px" aria-label="漏单扫描频率"><option>每 5 分钟</option><option>每 10 分钟</option><option>每 30 分钟</option></select>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section class="config-section" id="config-execution">
          <article class="card config-card">
            <div class="card-header"><div><h2>执行模式</h2><p>控制策略命中后是否直接影响用户登录</p></div></div>
            <div class="card-body">
              <div class="radio-stack">
                <label class="radio-option selected">
                  <input class="config-input" type="radio" name="execution" value="auto" checked>
                  <span><strong>自动执行封禁与解封</strong><span>命中策略后立即执行，所有操作写入审计日志</span></span>
                </label>
                <label class="radio-option">
                  <input class="config-input" type="radio" name="execution" value="review">
                  <span><strong>人工审核后执行</strong><span>命中策略后进入待审核列表，不直接拦截登录</span></span>
                </label>
                <label class="radio-option">
                  <input class="config-input" type="radio" name="execution" value="observe">
                  <span><strong>观察模式</strong><span>仅记录命中结果，用于策略上线前验证</span></span>
                </label>
              </div>
              <div class="rule-row" style="margin-top:18px">
                <div class="rule-label"><strong>告警通知</strong><span>高风险事件通过企业消息通知值班人员</span></div>
                <div class="rule-control">
                  <span>仅高风险事件</span>
                  <label class="switch"><input class="config-input" type="checkbox" checked aria-label="启用告警通知"><span class="switch-track"></span></label>
                </div>
              </div>
            </div>
          </article>
        </section>
        <div class="sticky-save">
          <div class="save-hint"><span class="unsaved-dot"></span><span id="saveHint">当前配置已生效，修改后请保存</span></div>
          <button class="button" id="saveConfig" type="button">${icon("check")}保存并发布策略</button>
        </div>
      </div>
    </div>
  `;
  bindConfigEvents();
}

function renderAudit() {
  const logs = [
    ["2026-07-29 14:32:08", "系统", "自动封禁", "Starlord_77 / U-87924130", "命中累计退款金额规则", "success"],
    ["2026-07-29 14:18:23", "林晓", "修改策略", "封禁触发规则", "累计退款笔数 3 → 2", "success"],
    ["2026-07-29 13:48:51", "系统", "补款确认", "飞行的橘子 / U-50192847", "已补 ¥128.00，仍需 ¥200.00", "pending"],
    ["2026-07-29 12:16:04", "系统", "自动解封", "Ares_Lee / U-79241650", "补款已达到解封阈值", "success"],
    ["2026-07-29 11:06:19", "周岚", "手动封禁", "MoonRabbit / U-29410586", "高频退款并消耗虚拟资产", "success"],
    ["2026-07-29 10:01:42", "系统", "渠道重试", "Google Play 同步任务", "第 2 次重试成功", "success"],
    ["2026-07-29 09:54:11", "系统", "自动解封", "Kay_Dragon / U-43018726", "补款 ¥648.00 已到账", "success"],
  ];
  document.getElementById("page-audit").innerHTML = `
    ${pageHeading(
      "auditTitle",
      "操作日志",
      `记录策略、封禁、解封与渠道同步操作 · ${projects[state.project].name}`,
      `<button class="button" type="button" data-action="export">${icon("export")}导出日志</button>`,
    )}
    <section class="card filter-card">
      <div class="filter-row">
        <div class="filter-group">
          <label for="auditSearch">搜索日志</label>
          <div class="input-wrap"><span class="prefix-icon">${icon("search")}</span><input class="input" id="auditSearch" type="search" placeholder="操作人 / 用户 UID / 操作内容"></div>
        </div>
        <div class="filter-group"><label for="auditType">操作类型</label><select class="select" id="auditType"><option>全部操作</option><option>封禁</option><option>解封</option><option>策略修改</option><option>渠道同步</option></select></div>
        <div class="filter-group"><label for="auditOperator">操作人</label><select class="select" id="auditOperator"><option>全部</option><option>系统</option><option>林晓</option><option>周岚</option></select></div>
        <div class="filter-actions"><button class="button" type="button" data-action="audit-query">${icon("filter")}查询</button></div>
      </div>
    </section>
    <section class="card">
      <div class="table-toolbar"><strong>日志明细</strong><span class="muted">保留最近 180 天</span></div>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>操作时间</th><th>操作人</th><th>操作类型</th><th>操作对象</th><th>详情</th><th>结果</th></tr></thead>
          <tbody>${logs
            .map(
              (log) => `<tr><td><span class="money">${log[0]}</span></td><td>${log[1]}</td><td>${log[2]}</td><td>${log[3]}</td><td>${log[4]}</td><td><span class="status-tag ${log[5]}">成功</span></td></tr>`,
            )
            .join("")}</tbody>
        </table>
      </div>
    </section>
  `;
}

function renderAllPages() {
  renderOverview();
  renderUsers();
  renderRefunds();
  renderConfig();
  renderAudit();
  document.getElementById("riskNavCount").textContent = projects[state.project].riskCount;
}

function bindUsersEvents() {
  document.getElementById("applyFilters")?.addEventListener("click", applyUserFilters);
  document.getElementById("userSearch")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") applyUserFilters();
  });
  document.getElementById("resetFilters")?.addEventListener("click", () => {
    document.getElementById("userSearch").value = "";
    document.getElementById("statusFilter").value = "all";
    document.getElementById("riskFilter").value = "all";
    state.storeFilter = "all";
    state.filteredUsers = [...state.users];
    state.selected.clear();
    renderUsers();
    showToast("筛选条件已重置", "已显示全部受控用户", "info");
  });

  document.querySelectorAll("[data-store]").forEach((button) => {
    button.addEventListener("click", () => {
      state.storeFilter = button.dataset.store;
      applyUserFilters();
    });
  });

  document.getElementById("selectAll")?.addEventListener("change", (event) => {
    state.selected.clear();
    if (event.target.checked) {
      state.filteredUsers.forEach((user) => state.selected.add(user.id));
    }
    refreshUserTable();
  });

  document.querySelectorAll(".user-check").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) state.selected.add(checkbox.dataset.userId);
      else state.selected.delete(checkbox.dataset.userId);
      refreshUserTable();
    });
  });
}

function applyUserFilters() {
  const query = (document.getElementById("userSearch")?.value || "").trim().toLowerCase();
  const status = document.getElementById("statusFilter")?.value || "all";
  const risk = document.getElementById("riskFilter")?.value || "all";
  state.filteredUsers = state.users.filter((user) => {
    const queryHit =
      !query ||
      [user.name, user.id, user.order, user.account].some((value) =>
        value.toLowerCase().includes(query),
      );
    const storeHit = state.storeFilter === "all" || user.store === state.storeFilter;
    const statusHit = status === "all" || user.status === status;
    const riskHit =
      risk === "all" ||
      (risk === "high" && user.score >= 80) ||
      (risk === "medium" && user.score >= 50 && user.score < 80) ||
      (risk === "low" && user.score < 50);
    return queryHit && storeHit && statusHit && riskHit;
  });
  state.selected.clear();
  renderUsers();
}

function refreshUserTable() {
  const body = document.getElementById("userTableBody");
  if (!body) return;
  body.innerHTML = renderUserRows(state.filteredUsers);
  document.getElementById("selectedCount").textContent = state.selected.size;
  document.getElementById("selectionTools").classList.toggle("visible", state.selected.size > 0);
  const selectAll = document.getElementById("selectAll");
  if (selectAll) {
    selectAll.checked = state.filteredUsers.length > 0 && state.selected.size === state.filteredUsers.length;
    selectAll.indeterminate =
      state.selected.size > 0 && state.selected.size < state.filteredUsers.length;
  }
  document.querySelectorAll(".user-check").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) state.selected.add(checkbox.dataset.userId);
      else state.selected.delete(checkbox.dataset.userId);
      refreshUserTable();
    });
  });
}

function bindConfigEvents() {
  document.querySelectorAll("[data-config-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-config-tab]").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".config-section").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(`config-${button.dataset.configTab}`).classList.add("active");
    });
  });

  document.querySelectorAll(".config-input").forEach((input) => {
    input.addEventListener("change", () => {
      state.configDirty = true;
      const hint = document.getElementById("saveHint");
      if (hint) hint.textContent = "有未保存的修改，仅对当前游戏项目生效";
      if (input.type === "radio") {
        input.closest(".radio-stack")?.querySelectorAll(".radio-option").forEach((option) => option.classList.remove("selected"));
        input.closest(".radio-option")?.classList.add("selected");
      }
    });
  });

  document.getElementById("saveConfig")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const original = button.innerHTML;
    button.disabled = true;
    button.textContent = "正在发布…";
    window.setTimeout(() => {
      button.disabled = false;
      button.innerHTML = original;
      state.configDirty = false;
      document.getElementById("saveHint").textContent = "策略已发布 · 刚刚更新";
      showToast("策略发布成功", `已应用至 ${projects[state.project].name}`, "success");
    }, 650);
  });
}

function switchPage(page) {
  if (!pageTitles[page]) return;
  state.page = page;
  document.querySelectorAll(".page").forEach((section) => section.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach((button) =>
    button.classList.toggle("active", button.dataset.page === page),
  );
  document.getElementById(`page-${page}`).classList.add("active");
  document.getElementById("breadcrumbTitle").textContent = pageTitles[page];
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.getElementById("mainContent").focus({ preventScroll: true });
  closeMobileNav();
}

function openDrawer(userId) {
  const user = state.users.find((item) => item.id === userId);
  if (!user) return;
  state.activeDrawerUser = userId;
  const need = Math.max(user.refund - user.supplement, 0);
  document.getElementById("drawerContent").innerHTML = `
    <div class="drawer-header">
      <h2 id="drawerTitle">用户风控详情</h2>
      <button class="icon-button" type="button" data-close-drawer aria-label="关闭详情">${icon("close")}</button>
    </div>
    <div class="drawer-summary">
      <div class="drawer-user">
        <span class="user-avatar">${user.avatar}</span>
        <div><h3>${user.name}</h3><p>${user.id} · ${user.country}</p></div>
        ${statusTag(user.status)}
      </div>
      <div class="drawer-actions">
        ${
          user.status === "blocked"
            ? `<button class="button" type="button" data-user-action="unblock" data-user-id="${user.id}">${icon("unlock")}解除封禁</button>`
            : `<button class="button danger" type="button" data-user-action="block" data-user-id="${user.id}">${icon("lock")}立即封禁</button>`
        }
        <button class="button secondary" type="button" data-action="copy-user">复制 UID</button>
      </div>
      <div class="drawer-facts">
        <div class="fact"><span>累计退款</span><strong style="color:#cf1322">${formatMoney(user.refund)}</strong></div>
        <div class="fact"><span>已补款</span><strong>${formatMoney(user.supplement)}</strong></div>
        <div class="fact"><span>仍需补款</span><strong style="color:${need > 0 ? "#d46b08" : "#389e0d"}">${formatMoney(need)}</strong></div>
      </div>
    </div>
    <div class="drawer-tabs" role="tablist">
      <button class="drawer-tab active" type="button" role="tab" aria-selected="true" data-drawer-tab="profile">基本信息</button>
      <button class="drawer-tab" type="button" role="tab" aria-selected="false" data-drawer-tab="timeline">风险轨迹</button>
      <button class="drawer-tab" type="button" role="tab" aria-selected="false" data-drawer-tab="orders">退款订单</button>
    </div>
    <div class="drawer-panel active" id="drawer-profile">
      <dl class="detail-list">
        <div><dt>退款渠道</dt><dd>${storeBadge(user.store)}</dd></div>
        <div><dt>商店账号</dt><dd>${user.account}</dd></div>
        <div><dt>最近订单号</dt><dd class="money">${user.order}</dd></div>
        <div><dt>触发规则</dt><dd>${user.trigger}</dd></div>
        <div><dt>风险评分</dt><dd><strong style="color:${user.score >= 80 ? "#cf1322" : "#d46b08"}">${user.score} / 100</strong></dd></div>
        <div><dt>首次退款</dt><dd>${user.firstRefund}</dd></div>
        <div><dt>最近登录</dt><dd>${user.lastLogin}</dd></div>
        <div><dt>最近设备</dt><dd>${user.device}</dd></div>
      </dl>
    </div>
    <div class="drawer-panel" id="drawer-timeline">
      <ol class="timeline">
        <li style="--timeline-color:#ff4d4f;--timeline-bg:#fff2f0"><strong>${user.status === "blocked" ? "登录已拦截" : "命中退款风控"}</strong><p>${user.trigger}</p><time>${user.updated}</time></li>
        <li style="--timeline-color:#faad14;--timeline-bg:#fffbe6"><strong>检测到商店退款</strong><p>${user.store === "apple" ? "App Store Server Notification" : "Google Play Voided Purchase"} 校验成功</p><time>${user.firstRefund}</time></li>
        <li><strong>游戏资产核查完成</strong><p>退款关联商品存在已消耗记录</p><time>${user.firstRefund}</time></li>
      </ol>
    </div>
    <div class="drawer-panel" id="drawer-orders">
      <dl class="detail-list">
        <div><dt>订单号</dt><dd class="money">${user.order}</dd></div>
        <div><dt>退款金额</dt><dd><strong style="color:#cf1322">${formatMoney(user.refund)}</strong></dd></div>
        <div><dt>退款笔数</dt><dd>${user.count} 笔</dd></div>
        <div><dt>商店校验</dt><dd><span class="status-tag success">校验成功</span></dd></div>
      </dl>
    </div>
  `;

  const drawer = document.getElementById("detailDrawer");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.getElementById("drawerScrim").classList.add("visible");
  document.body.style.overflow = "hidden";
  drawer.querySelector("[data-close-drawer]").focus();
}

function closeDrawer() {
  const drawer = document.getElementById("detailDrawer");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.getElementById("drawerScrim").classList.remove("visible");
  document.body.style.overflow = "";
  state.activeDrawerUser = null;
}

function openActionModal(action, userIds) {
  const users = userIds.map((id) => state.users.find((user) => user.id === id)).filter(Boolean);
  if (!users.length) return;
  state.modalAction = action;
  state.modalTargets = users.map((user) => user.id);
  const isBlock = action === "block";
  document.getElementById("modalTitle").textContent = isBlock ? "确认封禁用户？" : "确认解除封禁？";
  document.getElementById("modalDescription").textContent = isBlock
    ? "封禁后用户将无法登录游戏，并在登录时看到补款引导。"
    : "解封后用户将立即恢复登录权限，请确认补款或申诉已核验。";
  document.getElementById("modalContext").innerHTML =
    users.length === 1
      ? `<strong>${users[0].name}</strong> · ${users[0].id}<br>${isBlock ? "累计退款" : "已补款"}：${formatMoney(isBlock ? users[0].refund : users[0].supplement)}`
      : `本次将批量${isBlock ? "封禁" : "解封"} <strong>${users.length}</strong> 名用户，操作将写入审计日志。`;
  const iconWrap = document.getElementById("modalIcon");
  iconWrap.className = `modal-icon ${isBlock ? "" : "success"}`;
  iconWrap.innerHTML = icon(isBlock ? "lock" : "unlock");
  const confirm = document.getElementById("modalConfirm");
  confirm.className = `button ${isBlock ? "danger" : ""}`;
  confirm.textContent = isBlock ? "确认封禁" : "确认解封";
  document.getElementById("modalReason").value = "";
  const layer = document.getElementById("modalLayer");
  layer.classList.add("visible");
  layer.setAttribute("aria-hidden", "false");
  window.setTimeout(() => confirm.focus(), 30);
}

function closeModal() {
  const layer = document.getElementById("modalLayer");
  layer.classList.remove("visible");
  layer.setAttribute("aria-hidden", "true");
  state.modalAction = null;
  state.modalTargets = [];
}

function confirmAction() {
  const isBlock = state.modalAction === "block";
  const count = state.modalTargets.length;
  state.users.forEach((user) => {
    if (state.modalTargets.includes(user.id)) {
      user.status = isBlock ? "blocked" : "recovered";
      user.updated = "2026-07-29 刚刚";
    }
  });
  state.filteredUsers = state.filteredUsers.map(
    (user) => state.users.find((item) => item.id === user.id) || user,
  );
  state.selected.clear();
  closeModal();
  closeDrawer();
  renderAllPages();
  switchPage(state.page);
  showToast(
    isBlock ? "封禁操作成功" : "解封操作成功",
    count > 1 ? `已处理 ${count} 名用户` : "用户状态已更新，审计日志已记录",
    "success",
  );
}

function showToast(title, detail, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.style.setProperty(
    "--toast-color",
    type === "success" ? "#52c41a" : type === "warning" ? "#faad14" : "#1677ff",
  );
  toast.innerHTML = `${icon(type === "success" ? "check" : "info")}<div><strong>${title}</strong><span>${detail}</span></div>`;
  document.getElementById("toastRegion").appendChild(toast);
  window.setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-6px)";
    toast.style.transition = "all 160ms ease";
    window.setTimeout(() => toast.remove(), 180);
  }, 3300);
}

function openMobileNav() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("mobileScrim").classList.add("visible");
  document.getElementById("mobileMenuBtn").setAttribute("aria-expanded", "true");
}

function closeMobileNav() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("mobileScrim").classList.remove("visible");
  document.getElementById("mobileMenuBtn").setAttribute("aria-expanded", "false");
}

document.getElementById("mainNav").addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (button) switchPage(button.dataset.page);
});

document.getElementById("projectSelect").addEventListener("change", (event) => {
  if (state.configDirty) {
    state.configDirty = false;
  }
  state.project = event.target.value;
  state.selected.clear();
  state.users = structuredClone(baseUsers).map((user, index) => ({
    ...user,
    refund: Math.round(user.refund * (state.project === "nebula" ? 1 : state.project === "dragon" ? 0.82 : 1.12)),
    score: Math.min(99, user.score + (state.project === "tactics" ? 3 : index % 2)),
  }));
  state.filteredUsers = [...state.users];
  document.getElementById("projectBadge").textContent = projects[state.project].badge;
  renderAllPages();
  switchPage(state.page);
  showToast("游戏项目已切换", `当前数据范围：${projects[state.project].name}`, "info");
});

document.addEventListener("click", (event) => {
  const jump = event.target.closest("[data-page-jump]");
  if (jump) switchPage(jump.dataset.pageJump);

  const viewUser = event.target.closest("[data-view-user]");
  if (viewUser) openDrawer(viewUser.dataset.viewUser);

  const action = event.target.closest("[data-user-action]");
  if (action) openActionModal(action.dataset.userAction, [action.dataset.userId]);

  const bulk = event.target.closest("[data-bulk-action]");
  if (bulk) openActionModal(bulk.dataset.bulkAction, [...state.selected]);

  const close = event.target.closest("[data-close-drawer]");
  if (close) closeDrawer();

  const drawerTab = event.target.closest("[data-drawer-tab]");
  if (drawerTab) {
    document.querySelectorAll(".drawer-tab").forEach((tab) => {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    });
    document.querySelectorAll(".drawer-panel").forEach((panel) => panel.classList.remove("active"));
    drawerTab.classList.add("active");
    drawerTab.setAttribute("aria-selected", "true");
    document.getElementById(`drawer-${drawerTab.dataset.drawerTab}`).classList.add("active");
  }

  const generalAction = event.target.closest("[data-action]");
  if (generalAction) {
    const actionName = generalAction.dataset.action;
    if (actionName === "manual-block") {
      showToast("手动封禁入口", "原型演示：可通过用户列表选择用户后批量封禁", "info");
    } else if (actionName === "copy-user" && state.activeDrawerUser) {
      navigator.clipboard?.writeText(state.activeDrawerUser);
      showToast("UID 已复制", state.activeDrawerUser, "success");
    } else if (actionName === "refresh" || actionName === "sync") {
      showToast("同步完成", "已获取商店侧最新退款数据", "success");
    } else if (actionName === "export") {
      showToast("导出任务已创建", "文件准备完成后会出现在下载中心", "success");
    } else if (actionName === "history") {
      switchPage("audit");
    } else if (actionName.includes("query")) {
      showToast("查询完成", "已按当前条件更新列表", "info");
    }
  }
});

document.getElementById("drawerScrim").addEventListener("click", closeDrawer);
document.getElementById("mobileScrim").addEventListener("click", closeMobileNav);
document.getElementById("mobileMenuBtn").addEventListener("click", () => {
  const open = document.getElementById("sidebar").classList.contains("open");
  if (open) closeMobileNav();
  else openMobileNav();
});

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalCancel").addEventListener("click", closeModal);
document.getElementById("modalConfirm").addEventListener("click", confirmAction);
document.getElementById("modalLayer").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) closeModal();
});

document.getElementById("helpBtn").addEventListener("click", () => {
  showToast("使用帮助", "先选择游戏项目，再管理用户或调整对应退款策略", "info");
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (document.getElementById("modalLayer").classList.contains("visible")) closeModal();
  else if (document.getElementById("detailDrawer").classList.contains("open")) closeDrawer();
  else closeMobileNav();
});

renderAllPages();
switchPage("users");
