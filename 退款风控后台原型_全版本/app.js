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
  document:
    '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path><path d="M14 2v6h6"></path><path d="M8 13h8M8 17h6"></path>',
  download:
    '<path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path>',
  chevron: '<path d="m9 18 6-6-6-6"></path>',
  "chevron-down": '<path d="m6 9 6 6 6-6"></path>',
  bell:
    '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 7-3 9h18c0-2-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
  search:
    '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',
  plus: '<path d="M12 5v14M5 12h14"></path>',
  export:
    '<path d="M12 3v12"></path><path d="m7 8 5-5 5 5"></path><path d="M5 21h14a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2"></path>',
  copy:
    '<rect x="9" y="9" width="12" height="12" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
  edit:
    '<path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>',
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
    todayRefundOrders: 24,
    todaySupplement: 1424,
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
    todayRefundOrders: 18,
    todaySupplement: 980,
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
    todayRefundOrders: 29,
    todaySupplement: 2036,
    todayBlocked: 23,
    recovered: 9,
  },
};

const baseUsers = [
  {
    id: "U-87924130",
    sdkId: "1000128138132",
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
    account: "67***832@qq.com",
    order: "MTXH7K2D9J",
    firstRefund: "2026-07-27 18:26",
    lastLogin: "2026-07-29 14:31",
    device: "iPhone 16 Pro · iOS 20.0",
  },
  {
    id: "U-50192847",
    sdkId: "100013721737248",
    name: "飞行的橘子",
    avatar: "橘",
    store: "google",
    refund: 328,
    count: 2,
    supplement: 128,
    status: "blocked",
    score: 78,
    trigger: "30 日内退款 2 笔",
    updated: "2026-07-29 13:48",
    country: "新加坡",
    account: "fe****29@gmail.com",
    order: "GPA.3371-4028-1190-83812",
    firstRefund: "2026-07-24 10:06",
    lastLogin: "2026-07-29 13:47",
    device: "Pixel 10 · Android 17",
  },
  {
    id: "U-79241650",
    sdkId: "100013721737259",
    name: "Ares_Lee",
    avatar: "AL",
    store: "apple",
    refund: 188,
    count: 1,
    supplement: 188,
    status: "recovered",
    unlockMode: "auto",
    score: 34,
    trigger: "单笔退款金额超限",
    updated: "2026-07-29 12:16",
    country: "中国香港",
    account: "ar****50@icloud.com",
    order: "MPA23JW8QP",
    firstRefund: "2026-07-28 20:41",
    lastLogin: "2026-07-29 12:20",
    device: "iPad Pro · iPadOS 20.0",
  },
  {
    id: "U-29410586",
    sdkId: "100013721737260",
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
    account: "mo****86@gmail.com",
    order: "GPA.2280-1744-9280-64011",
    firstRefund: "2026-07-20 08:12",
    lastLogin: "2026-07-29 11:03",
    device: "Galaxy S26 · Android 17",
  },
  {
    id: "U-81650329",
    sdkId: "100013721737271",
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
    account: "be****29@qq.com",
    order: "MSX09CZ5LN",
    firstRefund: "2026-07-29 09:52",
    lastLogin: "2026-07-29 10:27",
    device: "iPhone 15 · iOS 19.6",
  },
  {
    id: "U-43018726",
    sdkId: "100013721737282",
    name: "Kay_Dragon",
    avatar: "KD",
    store: "google",
    refund: 648,
    count: 4,
    supplement: 648,
    status: "recovered",
    unlockMode: "manual",
    unlockOperator: "周岚",
    score: 41,
    trigger: "累计退款金额超限",
    updated: "2026-07-29 09:54",
    country: "马来西亚",
    account: "ka****26@gmail.com",
    order: "GPA.9920-2021-3650-48128",
    firstRefund: "2026-07-22 17:20",
    lastLogin: "2026-07-29 09:58",
    device: "Xiaomi 16 · Android 17",
  },
  {
    id: "U-30561974",
    sdkId: "100013721737293",
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
    account: "se****74@icloud.com",
    order: "MHH28BPLR4",
    firstRefund: "2026-07-25 14:03",
    lastLogin: "2026-07-29 09:11",
    device: "iPhone 16 · iOS 20.0",
  },
  {
    id: "U-67182495",
    sdkId: "100013721737304",
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
    account: "fa****95@gmail.com",
    order: "GPA.0152-6488-7240-16833",
    firstRefund: "2026-07-29 07:59",
    lastLogin: "2026-07-29 08:35",
    device: "OnePlus 15 · Android 17",
  },
];

const userProfileDetails = {
  "U-87924130": { uids: ["u129312301320130", "u129312301320138"], refundStores: ["apple", "google"], lastLoginIp: "192.186.11.1 中国上海" },
  "U-50192847": { uids: ["u129312301320248"], refundStores: ["google"], lastLoginIp: "103.27.184.22 新加坡" },
  "U-79241650": { uids: ["u129312301320259"], refundStores: ["apple"], lastLoginIp: "203.186.95.18 中国香港" },
  "U-29410586": { uids: ["u129312301320260", "u129312301320261"], refundStores: ["google", "apple"], lastLoginIp: "126.35.72.41 日本东京" },
  "U-81650329": { uids: ["u129312301320271"], refundStores: ["apple"], lastLoginIp: "192.168.18.36 中国北京" },
  "U-43018726": { uids: ["u129312301320282"], refundStores: ["google"], lastLoginIp: "175.136.62.19 马来西亚吉隆坡" },
  "U-30561974": { uids: ["u129312301320293"], refundStores: ["apple"], lastLoginIp: "118.163.47.12 中国台北" },
  "U-67182495": { uids: ["u129312301320304"], refundStores: ["google"], lastLoginIp: "49.228.116.33 泰国曼谷" },
};

const orderDetailRecords = {
  "U-50192847": {
    accountName: "暂无该信息",
    sdkId: "10001_101003271785827092852564444",
    channelType: "官方",
    roleName: "Vison(vvvison111)",
    server: "server01(10000001)",
    affiliateChannel: "版署审核专用-游卡-安卓",
    channelOrderId: "vFiEBfSIjLfwyRED",
    sdkOrderId: "739861502875082752",
    gameOrderId: "暂无该信息",
    orderCreatedAt: "2026-08-04 15:05:29",
    paymentCompletedAt: "2026-08-04 15:05:30",
    paymentNotifiedAt: "2026-08-04 15:05:33",
    paymentIp: "115.238.30.29(中国-浙江-杭州)",
    firstPaymentIp: "115.238.30.29(中国-浙江-杭州)",
    paymentDevice: "-",
    orderStatus: "发货失败",
    refundStatus: "未退款",
    productName: "this is productName(com.fpx.test1)",
    productAmount: "CNY 6",
    actualPaymentAmount: "CNY 6",
    refundTime: "2026-07-29 13:48",
  },
};

const auditLogs = [
  { time: "2026-07-29 14:32:08", operator: "系统", module: "受控用户", type: "账号封禁", before: "账号状态：观察中", result: "账号状态：封禁中" },
  { time: "2026-07-29 14:18:23", operator: "林晓", module: "退款策略", type: "策略修改", before: "累计退款笔数：3", result: "累计退款笔数：2" },
  { time: "2026-07-29 13:48:51", operator: "系统", module: "受控用户", type: "补款金额修改", before: "补款金额：¥0.00", result: "补款金额：¥200.00" },
  { time: "2026-07-29 12:16:04", operator: "系统", module: "受控用户", type: "账号解封", before: "账号状态：封禁中", result: "账号状态：已解封" },
  { time: "2026-07-29 11:06:19", operator: "周岚", module: "受控用户", type: "账号封禁", before: "账号状态：观察中", result: "账号状态：封禁中" },
  { time: "2026-07-29 10:01:42", operator: "系统", module: "退款策略", type: "策略修改", before: "解封规则：人工审核", result: "解封规则：补款后自动解封" },
  { time: "2026-07-29 09:54:11", operator: "周岚", module: "受控用户", type: "账号解封", before: "账号状态：封禁中", result: "账号状态：已解封" },
];

const state = {
  page: "users",
  project: "nebula",
  users: structuredClone(baseUsers),
  filteredUsers: structuredClone(baseUsers),
  storeFilter: "all",
  userQuery: "",
  userStatusFilter: "all",
  userPaymentFilter: "all",
  refundQuery: "",
  refundStoreFilter: "all",
  refundRangePreset: 7,
  refundStart: "2026-07-23T00:00:00",
  refundEnd: "2026-07-29T23:59:59",
  auditTypeFilter: "all",
  auditOperatorFilter: "all",
  auditRangePreset: 7,
  auditStart: "2026-07-23T00:00:00",
  auditEnd: "2026-07-29T23:59:59",
  activeDrawerUser: null,
  modalAction: null,
  modalTargets: [],
  configDirty: false,
};

const refundDateDraft = {
  start: state.refundStart,
  end: state.refundEnd,
  active: "start",
  viewDate: state.refundStart.slice(0, 10),
};

const auditDateDraft = {
  start: state.auditStart,
  end: state.auditEnd,
  active: "start",
  viewDate: state.auditStart.slice(0, 10),
};

const statusMap = {
  blocked: { label: "封禁中", className: "blocked" },
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

function formatMoney(value, symbol = projects[state.project].currencySymbol) {
  return `${symbol}${Number(value).toLocaleString("zh-CN", { minimumFractionDigits: 2 })}`;
}

function escapeAttribute(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function storeIcon(store, accessible = false) {
  const isApple = store === "apple";
  const label = isApple ? "App Store" : "Google Play";
  return `<span class="store-symbol ${store}" ${accessible ? `role="img" aria-label="${label}" title="${label}"` : 'aria-hidden="true"'}>${isApple ? "A" : ""}</span>`;
}

function storeBadge(store) {
  const isApple = store === "apple";
  return `<span class="store-badge">
    ${storeIcon(store)}
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
    return `<tr><td colspan="7">
      <div class="empty-state">
        <div class="empty-state-icon">${icon("empty")}</div>
        <strong>没有找到匹配的用户</strong>
        <p>请调整筛选条件后重试</p>
      </div>
    </td></tr>`;
  }

  return users
    .map((user) => {
      const uid = String(user.id).replace(/\D/g, "");
      return `<tr>
        <td>
          <div class="user-cell">
            <div class="user-account-stack">
              <div class="copy-line"><span class="copy-value user-account-value">${user.sdkId}</span>${refundCopyButton(user.sdkId, "SDKID")}</div>
              <div class="copy-line secondary"><span class="copy-value">${uid}</span>${refundCopyButton(uid, "UID")}</div>
            </div>
          </div>
        </td>
        <td>${storeBadge(user.store)}</td>
        <td><span class="money danger">${formatMoney(user.refund)}</span><span class="subtext">${user.count} 笔退款</span></td>
        <td><span class="money">${formatMoney(user.supplement)}</span><span class="subtext">${user.supplement >= user.refund ? "已补足" : `仍需 ${formatMoney(user.refund - user.supplement)}`}</span></td>
        <td>${statusTag(user.status)}</td>
        <td><span>${user.trigger}</span><span class="subtext">${user.updated}</span></td>
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
  document.getElementById("page-users").innerHTML = `
    ${pageHeading(
      "usersTitle",
      "受控用户",
      "管理退款用户，支持提前封禁和手动解封",
    )}
    <div class="scope-strip" aria-label="退款风控链路状态">
      <span class="scope-mode">已开启退款风控</span>
      <span class="scope-divider" aria-hidden="true"></span>
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
    </div>
    <section class="card filter-card" aria-label="筛选条件">
      <div class="filter-row">
        <div class="filter-group">
          <label for="userSearch">账号</label>
          <div class="input-wrap">
            <span class="prefix-icon">${icon("search")}</span>
            <input class="input" id="userSearch" type="search" value="${escapeAttribute(state.userQuery)}" placeholder="请输入SDKID或账号名" autocomplete="off">
          </div>
        </div>
        <div class="filter-group">
          <label for="statusFilter">帐号状态</label>
          <select class="select" id="statusFilter">
            <option value="all" ${state.userStatusFilter === "all" ? "selected" : ""}>全部状态</option>
            <option value="observing" ${state.userStatusFilter === "observing" ? "selected" : ""}>观察中</option>
            <option value="blocked" ${state.userStatusFilter === "blocked" ? "selected" : ""}>封禁中</option>
            <option value="recovered" ${state.userStatusFilter === "recovered" ? "selected" : ""}>已解封</option>
          </select>
        </div>
        <div class="filter-group">
          <label for="paymentFilter">补款状态</label>
          <select class="select" id="paymentFilter">
            <option value="all" ${state.userPaymentFilter === "all" ? "selected" : ""}>全部状态</option>
            <option value="unpaid" ${state.userPaymentFilter === "unpaid" ? "selected" : ""}>未补款</option>
            <option value="partial" ${state.userPaymentFilter === "partial" ? "selected" : ""}>部分补款</option>
            <option value="completed" ${state.userPaymentFilter === "completed" ? "selected" : ""}>补款完成</option>
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
        <span class="toolbar-spacer" aria-hidden="true"></span>
        <div class="segment" id="storeSegment" aria-label="商店渠道">
          <button class="${state.storeFilter === "all" ? "active" : ""}" type="button" data-store="all">全部渠道</button>
          <button class="${state.storeFilter === "apple" ? "active" : ""}" type="button" data-store="apple"><span class="mini-platform apple">A</span>App Store</button>
          <button class="${state.storeFilter === "google" ? "active" : ""}" type="button" data-store="google"><span class="mini-platform google"></span>Google Play</button>
        </div>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>用户</th>
              <th>退款渠道</th>
              <th>累计退款</th>
              <th>已补款</th>
              <th>状态</th>
              <th>触发原因 / 更新时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody id="userTableBody">${renderUserRows(state.filteredUsers)}</tbody>
        </table>
      </div>
      <div class="pagination-bar">
        <span class="pagination-total">共 <span id="resultCount">${state.filteredUsers.length}</span> 条</span>
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

function formatRefundDetailMoney(value) {
  return `￥${Number(value).toLocaleString("zh-CN")}`;
}

function getRefundRiskResult(user) {
  if (user.status === "observing") {
    return {
      label: "观察中",
      className: "observing",
      detail: `累计退款${user.count}单，共${formatRefundDetailMoney(user.refund)}`,
    };
  }
  const detail =
    user.count >= 3
      ? `累计退款订单数超限额（${user.count}单）`
      : `累计退款金额超限额（${formatRefundDetailMoney(user.refund)}）`;
  return { label: "账号封禁", className: "blocked", detail };
}

function refundCopyButton(value, label) {
  return `<button class="inline-copy-button" type="button" data-copy-value="${value}" data-copy-label="${label}" aria-label="复制${label} ${value}">${icon("copy")}</button>`;
}

function getLatestRefundDate() {
  const dates = state.users.map((user) => user.updated.slice(0, 10)).sort();
  return dates[dates.length - 1] || "2026-07-29";
}

function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function updateRefundPreset(days) {
  const endValue = getLatestRefundDate();
  const startDate = new Date(`${endValue}T00:00:00`);
  startDate.setDate(startDate.getDate() - days + 1);
  state.refundRangePreset = days;
  state.refundStart = `${formatDateInput(startDate)}T00:00:00`;
  state.refundEnd = `${endValue}T23:59:59`;
}

function getRefundRangeLabel() {
  if (state.refundStart && state.refundEnd) {
    return `${state.refundStart.slice(0, 10)} 至 ${state.refundEnd.slice(0, 10)}`;
  }
  return "请选择起止日期";
}

function normalizeRefundDateTime(value, fallbackDate, isEnd = false) {
  const normalized = String(value || "").trim().replace(" ", "T");
  const [datePart, timePart = isEnd ? "23:59:59" : "00:00:00"] = normalized.split("T");
  const timeParts = timePart.split(":");
  const hour = String(timeParts[0] || (isEnd ? "23" : "00")).padStart(2, "0");
  const minute = String(timeParts[1] || (isEnd ? "59" : "00")).padStart(2, "0");
  const second = String(timeParts[2] || (isEnd ? "59" : "00")).padStart(2, "0");
  return `${datePart || fallbackDate}T${hour}:${minute}:${second}`;
}

function syncRefundDateDraft(active = "start") {
  const fallbackDate = getLatestRefundDate();
  refundDateDraft.start = normalizeRefundDateTime(state.refundStart, fallbackDate, false);
  refundDateDraft.end = normalizeRefundDateTime(state.refundEnd, fallbackDate, true);
  refundDateDraft.active = active;
  refundDateDraft.viewDate = refundDateDraft[active].slice(0, 10);
}

function getRefundDateTimeParts(value) {
  const normalized = normalizeRefundDateTime(value, getLatestRefundDate());
  const [datePart, timePart] = normalized.split("T");
  const [hour, minute, second] = timePart.split(":").map(Number);
  return { datePart, hour, minute, second };
}

function setRefundDraftDate(dateValue) {
  const active = refundDateDraft.active;
  refundDateDraft[active] = active === "end" ? `${dateValue}T23:59:59` : `${dateValue}T00:00:00`;
  if (active === "start") {
    if (refundDateDraft.start > refundDateDraft.end) {
      refundDateDraft.end = `${dateValue}T23:59:59`;
    }
    refundDateDraft.active = "end";
  } else if (refundDateDraft.end < refundDateDraft.start) {
    const previousStart = refundDateDraft.start;
    refundDateDraft.start = refundDateDraft.end;
    refundDateDraft.end = previousStart;
  }
}

function setRefundDraftTime(unit, value) {
  const active = refundDateDraft.active;
  const parts = getRefundDateTimeParts(refundDateDraft[active]);
  parts[unit] = Number(value);
  const pad = (number) => String(number).padStart(2, "0");
  refundDateDraft[active] = `${parts.datePart}T${pad(parts.hour)}:${pad(parts.minute)}:${pad(parts.second)}`;
}

function shiftRefundCalendar(monthOffset) {
  const viewDate = new Date(`${refundDateDraft.viewDate}T00:00:00`);
  viewDate.setDate(1);
  viewDate.setMonth(viewDate.getMonth() + monthOffset);
  refundDateDraft.viewDate = formatDateInput(viewDate);
}

function renderRefundCalendarDays() {
  const view = new Date(`${refundDateDraft.viewDate}T00:00:00`);
  const year = view.getFullYear();
  const month = view.getMonth();
  const firstDay = new Date(year, month, 1);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const startDate = new Date(year, month, 1 - mondayOffset);
  const startKey = refundDateDraft.start.slice(0, 10);
  const endKey = refundDateDraft.end.slice(0, 10);
  const todayKey = formatDateInput(new Date());
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    const dateKey = formatDateInput(date);
    const classes = ["date-picker-day"];
    if (date.getMonth() !== month) classes.push("outside");
    if (dateKey > startKey && dateKey < endKey) classes.push("in-range");
    if (dateKey === startKey || dateKey === endKey) classes.push("selected");
    if (dateKey === todayKey) classes.push("today");
    return `<button class="${classes.join(" ")}" type="button" data-refund-day="${dateKey}" aria-label="选择 ${dateKey}"><span>${date.getDate()}</span></button>`;
  }).join("");
}

function renderRefundTimeOptions(unit, count, selectedValue) {
  return Array.from({ length: count }, (_, value) => `<button class="time-picker-option ${value === selectedValue ? "selected" : ""}" type="button" data-refund-time-unit="${unit}" data-refund-time-value="${value}">${String(value).padStart(2, "0")}</button>`).join("");
}

function renderRefundDatePickerMarkup() {
  const view = new Date(`${refundDateDraft.viewDate}T00:00:00`);
  return `
    <div class="date-picker-calendar">
      <div class="date-picker-header">
        <button class="picker-nav-button previous double" type="button" data-refund-month="-12" aria-label="上一年">${icon("chevron")}${icon("chevron")}</button>
        <button class="picker-nav-button previous" type="button" data-refund-month="-1" aria-label="上个月">${icon("chevron")}</button>
        <strong>${view.getFullYear()} 年 ${view.getMonth() + 1} 月</strong>
        <button class="picker-nav-button" type="button" data-refund-month="1" aria-label="下个月">${icon("chevron")}</button>
        <button class="picker-nav-button double" type="button" data-refund-month="12" aria-label="下一年">${icon("chevron")}${icon("chevron")}</button>
      </div>
      <div class="date-picker-body">
        <div class="date-picker-weekdays" aria-hidden="true">${["一", "二", "三", "四", "五", "六", "日"].map((day) => `<span>${day}</span>`).join("")}</div>
        <div class="date-picker-days">${renderRefundCalendarDays()}</div>
      </div>
    </div>
    <div class="date-picker-footer">
      <button class="date-picker-today" type="button" data-refund-today>今天</button>
      <span class="muted">当前选择：${refundDateDraft.active === "start" ? "开始日期" : "结束日期"}</span>
      <span class="footer-spacer"></span>
      <button class="button secondary" id="cancelRefundRange" type="button">取消</button>
      <button class="button" id="confirmRefundRange" type="button">确定</button>
    </div>`;
}

function refreshRefundDatePickerPanel() {
  const panel = document.getElementById("refundDatePickerPanel");
  if (!panel) return;
  panel.innerHTML = renderRefundDatePickerMarkup();
}

function openRefundDatePopover(active = "start") {
  syncRefundDateDraft(active);
  refreshRefundDatePickerPanel();
  const popover = document.getElementById("refundDatePopover");
  const trigger = document.getElementById("refundDateTrigger");
  if (popover) popover.hidden = false;
  if (trigger) trigger.setAttribute("aria-expanded", "true");
}

function getFilteredRefundUsers() {
  const query = state.refundQuery.trim().toLowerCase();
  return [...state.users]
    .filter((user) => {
      const queryHit =
        !query ||
        [user.order, user.id, user.sdkId, user.name].some((value) =>
          value.toLowerCase().includes(query),
        );
      const storeHit =
        state.refundStoreFilter === "all" || user.store === state.refundStoreFilter;
      const refundDate = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}/.test(user.updated)
        ? `${user.updated.slice(0, 16).replace(" ", "T")}:00`
        : `${user.updated.slice(0, 10)}T23:59:59`;
      const startHit = !state.refundStart || refundDate >= state.refundStart;
      const endHit = !state.refundEnd || refundDate <= state.refundEnd;
      return queryHit && storeHit && startHit && endHit;
    })
    .sort((a, b) => b.refund - a.refund);
}

function renderRefundRows(users) {
  if (!users.length) {
  return `<tr><td colspan="7"><div class="empty-state"><strong>暂无符合条件的退款订单</strong><span>请调整订单号、用户标识或退款日期后重试</span></div></td></tr>`;
  }
  return users
    .map((user, index) => {
      const result = getRefundRiskResult(user);
      return `<tr>
        <td>${index + 1}</td>
        <td><div class="order-number-stack"><div class="copy-line"><span class="copy-value money">${user.order}</span>${refundCopyButton(user.order, "退款订单号")}</div><span class="subtext">${user.updated}</span></div></td>
        <td><div class="refund-id-stack"><div class="copy-line"><span class="copy-value">SDKID：${user.sdkId}</span>${refundCopyButton(user.sdkId, "SDKID")}</div><div class="copy-line secondary"><span class="copy-value">UID：${user.id}</span>${refundCopyButton(user.id, "UID")}</div></div></td>
        <td>${storeBadge(user.store)}</td>
        <td><span class="money danger">${formatMoney(user.refund)}</span></td>
        <td><div class="refund-result-stack"><span>${result.detail}</span></div></td>
        <td><div class="row-actions"><button class="button link" type="button" data-view-order="${user.id}">查看订单详情</button><button class="button link" type="button" data-view-user="${user.id}">查看关联用户</button></div></td>
      </tr>`;
    })
    .join("");
}

function renderRefunds() {
  const project = projects[state.project];
  const refundUsers = getFilteredRefundUsers();
  const refundRows = renderRefundRows(refundUsers);
  const refundMetrics = [
    metricCard({ label: "封禁中帐号数", value: project.riskCount, sub: "当前登录拦截中的帐号", iconName: "lock", color: "#ff4d4f", bg: "#fff2f0" }),
    metricCard({ label: "今日退款订单数", value: project.todayRefundOrders, sub: "商店侧今日确认退款", iconName: "receipt", color: "#fa8c16", bg: "#fff7e6" }),
    metricCard({ label: "今日退款金额", value: formatMoney(project.todayRefund), sub: "已确认退款订单金额", iconName: "refund", color: "#722ed1", bg: "#f9f0ff" }),
    metricCard({ label: "今日补款金额", value: formatMoney(project.todaySupplement), sub: "今日成功到账补款", iconName: "payment", color: "#52c41a", bg: "#f6ffed" }),
  ].join("");

  document.getElementById("page-refunds").innerHTML = `
    ${pageHeading(
      "refundsTitle",
      "退款记录",
      "支持查询历史退款订单，快速定位退款风险",
    )}
    <div class="metric-grid">${refundMetrics}</div>
    <section class="card filter-card">
      <div class="filter-row">
        <div class="filter-group">
          <label for="refundSearch">搜索退款订单</label>
          <div class="input-wrap">
            <span class="prefix-icon">${icon("search")}</span>
            <input class="input" id="refundSearch" type="search" placeholder="请输入订单号/UID/SDKID">
          </div>
        </div>
        <div class="filter-group">
          <label id="refundDateLabel">退款日期</label>
          <div class="date-range-picker">
            <button class="date-range-trigger" id="refundDateTrigger" type="button" aria-expanded="false" aria-controls="refundDatePopover">
              <span class="range-part" data-range-field="start">${state.refundStart ? state.refundStart.slice(0, 10) : "开始日期"}</span>
              <span class="range-arrow" aria-hidden="true">${icon("arrow")}</span>
              <span class="range-part" data-range-field="end">${state.refundEnd ? state.refundEnd.slice(0, 10) : "结束日期"}</span>
              <span class="range-calendar-icon" aria-hidden="true"></span>
            </button>
            <div class="date-range-popover date-only-range-popover" id="refundDatePopover" role="dialog" aria-labelledby="refundDateLabel" hidden>
              <div class="refund-range-shortcuts" aria-label="退款日期快捷选项">
                <strong>快捷选择</strong>
                ${[3, 7, 30].map((days) => `<button class="${state.refundRangePreset === days ? "active" : ""}" type="button" data-refund-range="${days}">近${days}天</button>`).join("")}
              </div>
              <div class="datetime-picker-panel date-only-picker-panel" id="refundDatePickerPanel"></div>
            </div>
          </div>
        </div>
        <div class="filter-actions"><button class="button" id="applyRefundFilters" type="button">${icon("filter")}查询</button></div>
      </div>
    </section>
    <section class="card">
      <div class="table-toolbar"><strong>退款流水</strong><span class="toolbar-spacer"></span><div class="segment" aria-label="退款渠道筛选"><button class="${state.refundStoreFilter === "all" ? "active" : ""}" type="button" data-refund-store="all">全部渠道</button><button class="${state.refundStoreFilter === "apple" ? "active" : ""}" type="button" data-refund-store="apple"><span class="mini-platform apple">A</span>App Store</button><button class="${state.refundStoreFilter === "google" ? "active" : ""}" type="button" data-refund-store="google"><span class="mini-platform google"></span>Google Play</button></div></div>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>#</th><th>退款订单 / 时间</th><th>关联用户</th><th>退款渠道</th><th>退款金额</th><th>风控结果</th><th>操作</th></tr></thead>
          <tbody>${refundRows}</tbody>
        </table>
      </div>
      <div class="pagination-bar"><span class="pagination-total">共 ${refundUsers.length} 条</span><span>每页 20 条</span><button class="page-button active" type="button" aria-current="page">1</button></div>
    </section>
  `;
  document.getElementById("refundSearch").value = state.refundQuery;
  bindRefundEvents();
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

function getLatestAuditDate() {
  const dates = auditLogs.map((log) => log.time.slice(0, 10)).sort();
  return dates[dates.length - 1] || "2026-07-29";
}

function updateAuditPreset(days) {
  const endValue = getLatestAuditDate();
  const startDate = new Date(`${endValue}T00:00:00`);
  startDate.setDate(startDate.getDate() - days + 1);
  state.auditRangePreset = days;
  state.auditStart = `${formatDateInput(startDate)}T00:00:00`;
  state.auditEnd = `${endValue}T23:59:59`;
}

function syncAuditDateDraft(active = "start") {
  const fallbackDate = getLatestAuditDate();
  auditDateDraft.start = normalizeRefundDateTime(state.auditStart, fallbackDate, false);
  auditDateDraft.end = normalizeRefundDateTime(state.auditEnd, fallbackDate, true);
  auditDateDraft.active = active;
  auditDateDraft.viewDate = auditDateDraft[active].slice(0, 10);
}

function getAuditDateTimeParts(value) {
  const normalized = normalizeRefundDateTime(value, getLatestAuditDate());
  const [datePart, timePart] = normalized.split("T");
  const [hour, minute, second] = timePart.split(":").map(Number);
  return { datePart, hour, minute, second };
}

function setAuditDraftDate(dateValue) {
  const active = auditDateDraft.active;
  const current = normalizeRefundDateTime(auditDateDraft[active], dateValue, active === "end");
  auditDateDraft[active] = `${dateValue}T${current.split("T")[1]}`;
  if (active === "start") {
    if (auditDateDraft.start > auditDateDraft.end) {
      auditDateDraft.end = `${dateValue}T23:59:59`;
    }
    auditDateDraft.active = "end";
  } else if (auditDateDraft.end < auditDateDraft.start) {
    const previousStart = auditDateDraft.start;
    auditDateDraft.start = auditDateDraft.end;
    auditDateDraft.end = previousStart;
  }
}

function setAuditDraftTime(unit, value) {
  const active = auditDateDraft.active;
  const parts = getAuditDateTimeParts(auditDateDraft[active]);
  parts[unit] = Number(value);
  const pad = (number) => String(number).padStart(2, "0");
  auditDateDraft[active] = `${parts.datePart}T${pad(parts.hour)}:${pad(parts.minute)}:${pad(parts.second)}`;
}

function shiftAuditCalendar(monthOffset) {
  const viewDate = new Date(`${auditDateDraft.viewDate}T00:00:00`);
  viewDate.setDate(1);
  viewDate.setMonth(viewDate.getMonth() + monthOffset);
  auditDateDraft.viewDate = formatDateInput(viewDate);
}

function renderAuditCalendarDays() {
  const view = new Date(`${auditDateDraft.viewDate}T00:00:00`);
  const year = view.getFullYear();
  const month = view.getMonth();
  const firstDay = new Date(year, month, 1);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const startDate = new Date(year, month, 1 - mondayOffset);
  const startKey = auditDateDraft.start.slice(0, 10);
  const endKey = auditDateDraft.end.slice(0, 10);
  const todayKey = formatDateInput(new Date());
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    const dateKey = formatDateInput(date);
    const classes = ["date-picker-day"];
    if (date.getMonth() !== month) classes.push("outside");
    if (dateKey > startKey && dateKey < endKey) classes.push("in-range");
    if (dateKey === startKey || dateKey === endKey) classes.push("selected");
    if (dateKey === todayKey) classes.push("today");
    return `<button class="${classes.join(" ")}" type="button" data-audit-day="${dateKey}" aria-label="选择 ${dateKey}"><span>${date.getDate()}</span></button>`;
  }).join("");
}

function renderAuditTimeOptions(unit, count, selectedValue) {
  return Array.from({ length: count }, (_, value) => `<button class="time-picker-option ${value === selectedValue ? "selected" : ""}" type="button" data-audit-time-unit="${unit}" data-audit-time-value="${value}">${String(value).padStart(2, "0")}</button>`).join("");
}

function renderAuditDatePickerMarkup() {
  const view = new Date(`${auditDateDraft.viewDate}T00:00:00`);
  const activeParts = getAuditDateTimeParts(auditDateDraft[auditDateDraft.active]);
  const pad = (number) => String(number).padStart(2, "0");
  const timeLabel = `${pad(activeParts.hour)}:${pad(activeParts.minute)}:${pad(activeParts.second)}`;
  return `
    <div class="date-picker-calendar">
      <div class="date-picker-header">
        <button class="picker-nav-button previous double" type="button" data-audit-month="-12" aria-label="上一年">${icon("chevron")}${icon("chevron")}</button>
        <button class="picker-nav-button previous" type="button" data-audit-month="-1" aria-label="上个月">${icon("chevron")}</button>
        <strong>${view.getFullYear()} 年 ${view.getMonth() + 1} 月</strong>
        <button class="picker-nav-button" type="button" data-audit-month="1" aria-label="下个月">${icon("chevron")}</button>
        <button class="picker-nav-button double" type="button" data-audit-month="12" aria-label="下一年">${icon("chevron")}${icon("chevron")}</button>
      </div>
      <div class="date-picker-body">
        <div class="date-picker-weekdays" aria-hidden="true">${["一", "二", "三", "四", "五", "六", "日"].map((day) => `<span>${day}</span>`).join("")}</div>
        <div class="date-picker-days">${renderAuditCalendarDays()}</div>
      </div>
    </div>
    <div class="time-picker-pane">
      <div class="time-picker-header"><span>${auditDateDraft.active === "start" ? "开始" : "结束"}</span><strong>${timeLabel}</strong></div>
      <div class="time-picker-columns">
        <div class="time-picker-column" aria-label="小时">${renderAuditTimeOptions("hour", 24, activeParts.hour)}</div>
        <div class="time-picker-column" aria-label="分钟">${renderAuditTimeOptions("minute", 60, activeParts.minute)}</div>
        <div class="time-picker-column" aria-label="秒">${renderAuditTimeOptions("second", 60, activeParts.second)}</div>
      </div>
    </div>
    <div class="date-picker-footer">
      <button class="date-picker-today" type="button" data-audit-today>今天</button>
      <span class="muted">当前选择：${auditDateDraft.active === "start" ? "开始时间" : "结束时间"}</span>
      <span class="footer-spacer"></span>
      <button class="button secondary" id="cancelAuditRange" type="button">取消</button>
      <button class="button" id="confirmAuditRange" type="button">确定</button>
    </div>`;
}

function refreshAuditDatePickerPanel() {
  const panel = document.getElementById("auditDatePickerPanel");
  if (!panel) return;
  panel.innerHTML = renderAuditDatePickerMarkup();
  panel.querySelectorAll(".time-picker-option.selected").forEach((button) => {
    const column = button.closest(".time-picker-column");
    if (column) column.scrollTop = Math.max(0, button.offsetTop - 84);
  });
}

function openAuditDatePopover(active = "start") {
  syncAuditDateDraft(active);
  refreshAuditDatePickerPanel();
  const popover = document.getElementById("auditDatePopover");
  const trigger = document.getElementById("auditDateTrigger");
  if (popover) popover.hidden = false;
  if (trigger) trigger.setAttribute("aria-expanded", "true");
}

function closeAuditDatePopover() {
  const popover = document.getElementById("auditDatePopover");
  const trigger = document.getElementById("auditDateTrigger");
  if (popover) popover.hidden = true;
  if (trigger) trigger.setAttribute("aria-expanded", "false");
}

function getFilteredAuditLogs() {
  return auditLogs.filter((log) => {
    const typeHit = state.auditTypeFilter === "all" || log.type === state.auditTypeFilter;
    const operatorHit = state.auditOperatorFilter === "all" || log.operator === state.auditOperatorFilter;
    const logTime = log.time.replace(" ", "T");
    const startHit = !state.auditStart || logTime >= state.auditStart;
    const endHit = !state.auditEnd || logTime <= state.auditEnd;
    return typeHit && operatorHit && startHit && endHit;
  });
}

function renderAuditRows(logs) {
  if (!logs.length) {
    return `<tr><td colspan="6"><div class="empty-state"><strong>暂无符合条件的操作日志</strong><span>请调整操作类型、操作人或操作时间后重试</span></div></td></tr>`;
  }
  return logs.map((log) => `<tr>
    <td><span class="money">${log.time}</span></td>
    <td>${log.operator}</td>
    <td><span class="audit-module">${log.module}</span></td>
    <td>${log.type}</td>
    <td><span class="audit-before">${log.before}</span></td>
    <td><span class="audit-result">${log.result}</span></td>
  </tr>`).join("");
}

function renderAudit() {
  const logs = getFilteredAuditLogs();
  document.getElementById("page-audit").innerHTML = `
    ${pageHeading(
      "auditTitle",
      "操作日志",
      `记录策略修改、账号封禁、账号解封与补款金额修改操作 · ${projects[state.project].name}`,
    )}
    <section class="card filter-card" aria-label="操作日志筛选条件">
      <div class="filter-row">
        <div class="filter-group">
          <label for="auditType">操作类型</label>
          <select class="select" id="auditType">
            <option value="all" ${state.auditTypeFilter === "all" ? "selected" : ""}>全部操作</option>
            <option value="策略修改" ${state.auditTypeFilter === "策略修改" ? "selected" : ""}>策略修改</option>
            <option value="账号封禁" ${state.auditTypeFilter === "账号封禁" ? "selected" : ""}>账号封禁</option>
            <option value="账号解封" ${state.auditTypeFilter === "账号解封" ? "selected" : ""}>账号解封</option>
            <option value="补款金额修改" ${state.auditTypeFilter === "补款金额修改" ? "selected" : ""}>补款金额修改</option>
          </select>
        </div>
        <div class="filter-group">
          <label for="auditOperator">操作人</label>
          <select class="select" id="auditOperator">
            <option value="all" ${state.auditOperatorFilter === "all" ? "selected" : ""}>全部</option>
            <option value="系统" ${state.auditOperatorFilter === "系统" ? "selected" : ""}>系统</option>
            <option value="林晓" ${state.auditOperatorFilter === "林晓" ? "selected" : ""}>林晓</option>
            <option value="周岚" ${state.auditOperatorFilter === "周岚" ? "selected" : ""}>周岚</option>
          </select>
        </div>
        <div class="filter-group">
          <label id="auditDateLabel">操作时间</label>
          <div class="date-range-picker">
            <button class="date-range-trigger" id="auditDateTrigger" type="button" aria-expanded="false" aria-controls="auditDatePopover">
              <span class="range-part" data-audit-range-field="start">${state.auditStart ? state.auditStart.replace("T", " ") : "开始时间"}</span>
              <span class="range-arrow" aria-hidden="true">${icon("arrow")}</span>
              <span class="range-part" data-audit-range-field="end">${state.auditEnd ? state.auditEnd.replace("T", " ") : "结束时间"}</span>
              <span class="range-calendar-icon" aria-hidden="true"></span>
            </button>
            <div class="date-range-popover" id="auditDatePopover" role="dialog" aria-labelledby="auditDateLabel" hidden>
              <div class="refund-range-shortcuts" aria-label="操作时间快捷选项">
                <strong>快捷选择</strong>
                ${[3, 7, 30].map((days) => `<button class="${state.auditRangePreset === days ? "active" : ""}" type="button" data-audit-range="${days}">近${days}天</button>`).join("")}
              </div>
              <div class="datetime-picker-panel" id="auditDatePickerPanel"></div>
            </div>
          </div>
        </div>
        <div class="filter-actions"><button class="button" id="applyAuditFilters" type="button">${icon("filter")}查询</button></div>
      </div>
    </section>
    <section class="card">
      <div class="table-toolbar"><strong>日志明细</strong></div>
      <div class="table-wrap">
        <table class="data-table audit-table">
          <thead><tr><th>操作时间</th><th>操作人</th><th>功能模块</th><th>操作类型</th><th>操作前</th><th>操作结果</th></tr></thead>
          <tbody>${renderAuditRows(logs)}</tbody>
        </table>
      </div>
      <div class="pagination-bar"><span class="pagination-total">共 ${logs.length} 条</span></div>
    </section>
  `;
  bindAuditEvents();
}

function bindAuditEvents() {
  document.getElementById("applyAuditFilters")?.addEventListener("click", () => {
    state.auditTypeFilter = document.getElementById("auditType")?.value || "all";
    state.auditOperatorFilter = document.getElementById("auditOperator")?.value || "all";
    renderAudit();
    showToast("查询完成", `已找到 ${getFilteredAuditLogs().length} 条操作日志`, "info");
  });

  const trigger = document.getElementById("auditDateTrigger");
  const popover = document.getElementById("auditDatePopover");
  trigger?.addEventListener("click", (event) => {
    const requestedField = event.target.closest("[data-audit-range-field]")?.dataset.auditRangeField || "start";
    if (popover.hidden) {
      openAuditDatePopover(requestedField);
      return;
    }
    auditDateDraft.active = requestedField;
    auditDateDraft.viewDate = auditDateDraft[requestedField].slice(0, 10);
    refreshAuditDatePickerPanel();
  });

  popover?.addEventListener("click", (event) => {
    const shortcut = event.target.closest("[data-audit-range]");
    if (shortcut) {
      const days = Number(shortcut.dataset.auditRange);
      updateAuditPreset(days);
      renderAudit();
      showToast("操作时间已更新", `已筛选近${days}天日志`, "info");
      return;
    }

    const monthButton = event.target.closest("[data-audit-month]");
    if (monthButton) {
      shiftAuditCalendar(Number(monthButton.dataset.auditMonth));
      refreshAuditDatePickerPanel();
      return;
    }

    const dayButton = event.target.closest("[data-audit-day]");
    if (dayButton) {
      setAuditDraftDate(dayButton.dataset.auditDay);
      auditDateDraft.viewDate = dayButton.dataset.auditDay;
      refreshAuditDatePickerPanel();
      return;
    }

    const timeButton = event.target.closest("[data-audit-time-unit]");
    if (timeButton) {
      setAuditDraftTime(timeButton.dataset.auditTimeUnit, timeButton.dataset.auditTimeValue);
      refreshAuditDatePickerPanel();
      return;
    }

    if (event.target.closest("[data-audit-today]")) {
      const today = formatDateInput(new Date());
      setAuditDraftDate(today);
      auditDateDraft.viewDate = today;
      refreshAuditDatePickerPanel();
      return;
    }

    if (event.target.closest("#cancelAuditRange")) {
      closeAuditDatePopover();
      return;
    }

    if (!event.target.closest("#confirmAuditRange")) return;
    if (auditDateDraft.start > auditDateDraft.end) {
      showToast("时间区间无效", "开始日期不能晚于结束日期", "warning");
      return;
    }
    state.auditRangePreset = null;
    state.auditStart = auditDateDraft.start;
    state.auditEnd = auditDateDraft.end;
    renderAudit();
    showToast("操作时间已更新", `${state.auditStart.replace("T", " ")} 至 ${state.auditEnd.replace("T", " ")}`, "info");
  });
}

function renderAllPages() {
  renderOverview();
  renderUsers();
  renderRefunds();
  renderConfig();
  renderAudit();
}

function bindUsersEvents() {
  document.getElementById("applyFilters")?.addEventListener("click", applyUserFilters);
  document.getElementById("userSearch")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") applyUserFilters();
  });
  document.getElementById("resetFilters")?.addEventListener("click", () => {
    state.userQuery = "";
    state.userStatusFilter = "all";
    state.userPaymentFilter = "all";
    state.storeFilter = "all";
    state.filteredUsers = [...state.users];
    renderUsers();
    showToast("筛选条件已重置", "已显示全部受控用户", "info");
  });

  document.querySelectorAll("[data-store]").forEach((button) => {
    button.addEventListener("click", () => {
      state.storeFilter = button.dataset.store;
      applyUserFilters();
    });
  });

}

function closeRefundDatePopover() {
  const popover = document.getElementById("refundDatePopover");
  const trigger = document.getElementById("refundDateTrigger");
  if (popover) popover.hidden = true;
  if (trigger) trigger.setAttribute("aria-expanded", "false");
}

function copyTextFallback(value, label) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch (error) {
    copied = false;
  } finally {
    textarea.remove();
  }
  showToast(copied ? `${label}已复制` : "复制失败", copied ? value : "请手动选择并复制该信息", copied ? "success" : "warning");
}

function copyTextValue(value, label) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(value)
      .then(() => showToast(`${label}已复制`, value, "success"))
      .catch(() => copyTextFallback(value, label));
    return;
  }
  copyTextFallback(value, label);
}

function applyRefundFilters() {
  state.refundQuery = (document.getElementById("refundSearch")?.value || "").trim();
  renderRefunds();
  showToast("查询完成", `已找到 ${getFilteredRefundUsers().length} 条退款订单`, "info");
}

function bindRefundEvents() {
  document.getElementById("applyRefundFilters")?.addEventListener("click", applyRefundFilters);
  document.getElementById("refundSearch")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      applyRefundFilters();
    }
  });

  document.querySelectorAll("[data-refund-store]").forEach((button) => {
    button.addEventListener("click", () => {
      state.refundStoreFilter = button.dataset.refundStore;
      renderRefunds();
      showToast("渠道筛选已更新", button.textContent.trim(), "info");
    });
  });

  const trigger = document.getElementById("refundDateTrigger");
  const popover = document.getElementById("refundDatePopover");
  trigger?.addEventListener("click", (event) => {
    const requestedField = event.target.closest("[data-range-field]")?.dataset.rangeField || "start";
    if (popover.hidden) {
      openRefundDatePopover(requestedField);
      return;
    }
    refundDateDraft.active = requestedField;
    refundDateDraft.viewDate = refundDateDraft[requestedField].slice(0, 10);
    refreshRefundDatePickerPanel();
  });

  popover?.addEventListener("click", (event) => {
    const shortcut = event.target.closest("[data-refund-range]");
    if (shortcut) {
      const days = Number(shortcut.dataset.refundRange);
      updateRefundPreset(days);
      renderRefunds();
      showToast("退款日期已更新", `已筛选近${days}天订单`, "info");
      return;
    }

    const monthButton = event.target.closest("[data-refund-month]");
    if (monthButton) {
      shiftRefundCalendar(Number(monthButton.dataset.refundMonth));
      refreshRefundDatePickerPanel();
      return;
    }

    const dayButton = event.target.closest("[data-refund-day]");
    if (dayButton) {
      setRefundDraftDate(dayButton.dataset.refundDay);
      refundDateDraft.viewDate = dayButton.dataset.refundDay;
      refreshRefundDatePickerPanel();
      return;
    }

    if (event.target.closest("[data-refund-today]")) {
      const today = formatDateInput(new Date());
      setRefundDraftDate(today);
      refundDateDraft.viewDate = today;
      refreshRefundDatePickerPanel();
      return;
    }

    if (event.target.closest("#cancelRefundRange")) {
      closeRefundDatePopover();
      return;
    }

    if (!event.target.closest("#confirmRefundRange")) return;
    if (refundDateDraft.start > refundDateDraft.end) {
      showToast("日期区间无效", "开始日期不能晚于结束日期", "warning");
      return;
    }
    state.refundRangePreset = null;
    state.refundStart = refundDateDraft.start;
    state.refundEnd = refundDateDraft.end;
    renderRefunds();
    showToast("退款日期已更新", getRefundRangeLabel(), "info");
  });
}

function applyUserFilters() {
  state.userQuery = (document.getElementById("userSearch")?.value || "").trim();
  state.userStatusFilter = document.getElementById("statusFilter")?.value || "all";
  state.userPaymentFilter = document.getElementById("paymentFilter")?.value || "all";
  const query = state.userQuery.toLowerCase();
  state.filteredUsers = state.users.filter((user) => {
    const queryHit =
      !query ||
      [user.account, user.sdkId].some((value) =>
        value.toLowerCase().includes(query),
      );
    const storeHit = state.storeFilter === "all" || user.store === state.storeFilter;
    const statusHit = state.userStatusFilter === "all" || user.status === state.userStatusFilter;
    const paymentStatus = user.supplement <= 0
      ? "unpaid"
      : user.supplement >= user.refund
        ? "completed"
        : "partial";
    const paymentHit = state.userPaymentFilter === "all" || paymentStatus === state.userPaymentFilter;
    return queryHit && storeHit && statusHit && paymentHit;
  });
  renderUsers();
}

function refreshUserTable() {
  const body = document.getElementById("userTableBody");
  if (!body) return;
  body.innerHTML = renderUserRows(state.filteredUsers);
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

function setRefundNavExpanded(expanded) {
  const toggle = document.querySelector('[data-nav-toggle="refund"]');
  const sublist = document.getElementById("refundNavSublist");
  if (!toggle || !sublist) return;
  toggle.setAttribute("aria-expanded", String(expanded));
  sublist.hidden = !expanded;
}

function switchPage(page) {
  if (!pageTitles[page]) return;
  state.page = page;
  if (["users", "refunds", "config"].includes(page)) setRefundNavExpanded(true);
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

function shiftDrawerDateTime(value, offsetDays = 0) {
  const normalized = String(value || "").trim().replace(" ", "T");
  const date = new Date(normalized.length === 16 ? `${normalized}:00` : normalized);
  if (Number.isNaN(date.getTime())) return value;
  date.setDate(date.getDate() + offsetDays);
  const pad = (number) => String(number).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function buildDrawerRefundOrders(user) {
  const count = Math.max(1, Number(user.count) || 1);
  const totalCents = Math.round(Number(user.refund) * 100);
  const baseCents = Math.floor(totalCents / count);
  const remainder = totalCents - baseCents * count;
  return Array.from({ length: count }, (_, index) => ({
    id: index === 0 ? user.order : `${user.order}-${String(index + 1).padStart(2, "0")}`,
    amount: (baseCents + (index < remainder ? 1 : 0)) / 100,
    store: user.store,
    channel: user.store === "apple" ? "App Store" : "Google Play",
    orderTime: shiftDrawerDateTime(user.firstRefund, -index),
    refundTime: shiftDrawerDateTime(user.updated, -index),
  }));
}

function renderDrawerRiskTimeline(user) {
  const isManualUnlock = user.status === "recovered" && user.unlockMode === "manual";
  const currentEvent = user.status === "blocked"
    ? { title: "系统自动封禁", detail: user.trigger, color: "#ff4d4f", fill: "#fff2f0" }
    : user.status === "recovered"
      ? {
        title: isManualUnlock ? "人工手动解封" : "系统自动解封",
        detail: isManualUnlock ? "运营人工核验后解除登录拦截" : "补款条件已满足，账号恢复登录",
        operator: isManualUnlock ? (user.unlockOperator || "未知") : "",
        color: "#52c41a",
        fill: "#f6ffed",
      }
      : { title: "账号进入观察", detail: user.trigger, color: "#1677ff", fill: "#e6f4ff" };
  const paymentRequirementEvents = Array.isArray(user.paymentRequirementEvents) ? user.paymentRequirementEvents : [];
  const events = [...paymentRequirementEvents, { ...currentEvent, time: user.updated }];
  if (user.supplement > 0) {
    events.push({
      title: "玩家自助补款",
      detail: "补款结果已通过支付渠道校验",
      time: user.updated,
      amount: `+${formatMoney(user.supplement)}`,
      amountClass: "positive",
      color: "#1677ff",
      fill: "#e6f4ff",
    });
  }
  events.push(
    {
      title: user.store === "apple" ? "苹果订单退款" : "Google Play 订单退款",
      detail: "退款通知已校验并关联至当前账号",
      time: user.firstRefund,
      amount: `-${formatMoney(user.refund)}`,
      amountClass: "negative",
      color: "#fa8c16",
      fill: "#fffbe6",
    },
    {
      title: "游戏资产核查完成",
      detail: "退款关联商品存在已消耗记录",
      time: user.firstRefund,
      color: "#1677ff",
      fill: "#e6f4ff",
    },
  );
  return events.map((event) => `<li style="--timeline-color:${event.color};--timeline-bg:${event.fill}"><strong>${event.title}${event.amount ? `<span class="timeline-amount ${event.amountClass}">${event.amount}</span>` : ""}</strong><p>${event.detail}</p><time>${event.time}</time>${event.operator ? `<span class="timeline-operator">操作人：${event.operator}</span>` : ""}</li>`).join("");
}

function renderDrawerOrderRows(user) {
  return buildDrawerRefundOrders(user).map((order) => `<tr>
    <td class="order-number-cell"><div class="drawer-order-entry">${storeIcon(order.store, true)}<div class="copy-line"><span class="copy-value money">${order.id}</span>${refundCopyButton(order.id, "退款订单号")}</div></div></td>
    <td class="refund-amount-cell">${formatMoney(order.amount)}</td>
    <td class="refund-time-cell">${order.refundTime}</td>
  </tr>`).join("");
}

function getUserProfileDetails(user) {
  return userProfileDetails[user.id] || {
    uids: [`u${String(user.sdkId).replace(/\D/g, "")}`],
    refundStores: [user.store],
    lastLoginIp: "192.168.1.1 中国上海",
  };
}

function getProfileStoreNames(stores) {
  return stores.map((store) => store === "apple" ? "App Store" : "Google Play").join("、");
}

function openDrawer(userId) {
  const user = state.users.find((item) => item.id === userId);
  if (!user) return;
  state.activeDrawerUser = userId;
  const need = Math.max(user.refund - user.supplement, 0);
  const uid = String(user.id).replace(/\D/g, "");
  document.getElementById("drawerContent").innerHTML = `
    <div class="drawer-header">
      <h2 id="drawerTitle">用户风控详情</h2>
      <button class="icon-button" type="button" data-close-drawer aria-label="关闭详情">${icon("close")}</button>
    </div>
    <div class="drawer-scroll-body">
      <div class="drawer-summary">
        <div class="drawer-user">
          <span class="user-avatar">${user.avatar}</span>
          <div>
            <h3 class="copy-line"><span class="copy-value">${user.sdkId}</span>${refundCopyButton(user.sdkId, "SDKID")}</h3>
            <p class="copy-line secondary"><span class="copy-value">${uid}</span>${refundCopyButton(uid, "UID")}</p>
          </div>
          ${statusTag(user.status)}
        </div>
        <div class="drawer-facts">
          <div class="fact"><span>累计退款</span><strong style="color:#cf1322">${formatMoney(user.refund)}</strong></div>
          <div class="fact"><span>累计补款</span><strong>${formatMoney(user.supplement)}</strong></div>
          <div class="fact"><span>仍需补款</span><strong style="color:${need > 0 ? "#d46b08" : "#389e0d"}">${formatMoney(need)}</strong></div>
        </div>
      </div>
      <div class="drawer-tabs" role="tablist" aria-label="用户风控详情分类">
        <button class="drawer-tab active" id="drawer-tab-profile" type="button" role="tab" aria-selected="true" aria-controls="drawer-profile" data-drawer-tab="profile">基础信息</button>
        <button class="drawer-tab" id="drawer-tab-timeline" type="button" role="tab" aria-selected="false" aria-controls="drawer-timeline" data-drawer-tab="timeline">风险轨迹</button>
        <button class="drawer-tab" id="drawer-tab-orders" type="button" role="tab" aria-selected="false" aria-controls="drawer-orders" data-drawer-tab="orders">退款订单</button>
      </div>
      <div class="drawer-panel active" id="drawer-profile" role="tabpanel" aria-labelledby="drawer-tab-profile">
        <dl class="detail-list">
          <div><dt>商店账号</dt><dd>${user.account}</dd></div>
          <div><dt>触发规则</dt><dd>${user.trigger}</dd></div>
          <div><dt>首次退款时间</dt><dd>${user.firstRefund}</dd></div>
          <div><dt>最近退款时间</dt><dd>${user.updated}</dd></div>
        </dl>
      </div>
      <div class="drawer-panel" id="drawer-timeline" role="tabpanel" aria-labelledby="drawer-tab-timeline">
        <ol class="timeline">${renderDrawerRiskTimeline(user)}</ol>
      </div>
      <div class="drawer-panel" id="drawer-orders" role="tabpanel" aria-labelledby="drawer-tab-orders">
        <div class="drawer-order-table-shell">
          <table class="drawer-order-table">
            <thead><tr><th class="order-number-cell">退款订单</th><th class="refund-amount-cell">退款金额</th><th class="refund-time-cell">退款时间</th></tr></thead>
            <tbody>${renderDrawerOrderRows(user)}</tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="drawer-footer">
      ${user.status === "blocked"
        ? `<button class="button" type="button" data-user-action="unblock" data-user-id="${user.id}">${icon("unlock")}解除封禁</button>`
        : `<button class="button danger" type="button" data-user-action="block" data-user-id="${user.id}">${icon("lock")}立即封禁</button>`}
    </div>
  `;

  const drawer = document.getElementById("detailDrawer");
  drawer.classList.remove("order-detail-mode");
  drawer.classList.add("open", "user-detail-mode");
  drawer.setAttribute("aria-hidden", "false");
  document.getElementById("drawerScrim").classList.add("visible");
  document.body.style.overflow = "hidden";
  drawer.querySelector("[data-close-drawer]").focus();
}

function getOrderDetailRecord(user) {
  const profile = getUserProfileDetails(user);
  const paymentTime = user.updated.length === 16 ? `${user.updated}:00` : user.updated;
  const [ipAddress, ...locationParts] = profile.lastLoginIp.split(" ");
  const paymentIp = locationParts.length ? `${ipAddress}(${locationParts.join("")})` : ipAddress;
  return orderDetailRecords[user.id] || {
    accountName: user.account || "暂无该信息",
    sdkId: user.sdkId,
    channelType: "官方",
    roleName: user.name,
    server: "server01(10000001)",
    affiliateChannel: user.store === "google" ? "版署审核专用-游卡-安卓" : "App Store · 国服",
    channelOrderId: user.order,
    sdkOrderId: String(user.sdkId).replace(/\D/g, ""),
    gameOrderId: "暂无该信息",
    orderCreatedAt: paymentTime,
    paymentCompletedAt: paymentTime,
    paymentNotifiedAt: paymentTime,
    paymentIp,
    firstPaymentIp: paymentIp,
    paymentDevice: user.device || "-",
    orderStatus: "支付成功",
    refundStatus: "已退款",
    productName: "退款订单关联商品",
    productAmount: `CNY ${Number(user.refund).toLocaleString("zh-CN")}`,
    actualPaymentAmount: `CNY ${Number(user.refund).toLocaleString("zh-CN")}`,
    refundTime: user.updated,
  };
}

function openOrderDrawer(userId) {
  const user = state.users.find((item) => item.id === userId);
  if (!user) return;
  state.activeDrawerUser = userId;
  const detail = getOrderDetailRecord(user);
  document.getElementById("drawerContent").innerHTML = `
    <div class="drawer-header">
      <h2 id="drawerTitle">订单详情</h2>
      <button class="icon-button" type="button" data-close-drawer aria-label="关闭订单详情">${icon("close")}</button>
    </div>
    <div class="order-detail-scroll">
      <section class="order-detail-section" aria-labelledby="orderAccountTitle">
        <h3 class="order-detail-section-title" id="orderAccountTitle">${icon("users")}账号信息</h3>
        <div class="order-detail-grid">
          <div class="order-detail-field"><span>账号名：</span><strong>${detail.accountName}</strong></div>
          <div class="order-detail-field"><span>SDK-ID：</span><div class="copy-line"><span class="copy-value">${detail.sdkId}</span>${refundCopyButton(detail.sdkId, "SDK-ID")}</div></div>
          <div class="order-detail-field"><span>渠道类型：</span><strong>${detail.channelType}</strong></div>
          <div class="order-detail-field"><span>角色名：</span><strong>${detail.roleName}</strong></div>
          <div class="order-detail-field"><span>区服：</span><strong>${detail.server}</strong></div>
          <div class="order-detail-field"><span>所属渠道：</span><strong>${detail.affiliateChannel}</strong></div>
        </div>
      </section>
      <section class="order-detail-section" aria-labelledby="orderPaymentTitle">
        <h3 class="order-detail-section-title" id="orderPaymentTitle">${icon("payment")}支付信息</h3>
        <div class="order-detail-grid">
          <div class="order-detail-field"><span>渠道订单号：</span><div class="copy-line"><span class="copy-value">${detail.channelOrderId}</span>${refundCopyButton(detail.channelOrderId, "渠道订单号")}</div></div>
          <div class="order-detail-field"><span>SDK订单号：</span><div class="copy-line"><span class="copy-value">${detail.sdkOrderId}</span>${refundCopyButton(detail.sdkOrderId, "SDK订单号")}</div></div>
          <div class="order-detail-field"><span>游戏订单号：</span><strong>${detail.gameOrderId}</strong></div>
          <div class="order-detail-field"><span>创建订单时间：</span><strong>${detail.orderCreatedAt}</strong></div>
          <div class="order-detail-field"><span>支付完成时间：</span><strong>${detail.paymentCompletedAt}</strong></div>
          <div class="order-detail-field"><span>支付通知时间：</span><strong>${detail.paymentNotifiedAt}</strong></div>
          <div class="order-detail-field"><span>支付IP：</span><strong>${detail.paymentIp}</strong></div>
          <div class="order-detail-field"><span>首次支付IP：</span><strong>${detail.firstPaymentIp}</strong></div>
          <div class="order-detail-field"><span>支付设备：</span><strong>${detail.paymentDevice}</strong></div>
          <div class="order-detail-field"><span>订单状态：</span><strong class="order-detail-status ${detail.orderStatus === "发货失败" ? "failed" : ""}">${detail.orderStatus}</strong></div>
          <div class="order-detail-field"><span>退款状态：</span><strong class="order-detail-status ${detail.refundStatus === "未退款" ? "refund-pending" : ""}">${detail.refundStatus}</strong></div>
          <div class="order-detail-field"><span>商品名：</span><strong>${detail.productName}</strong></div>
          <div class="order-detail-field"><span>商品金额：</span><strong>${detail.productAmount}</strong></div>
          <div class="order-detail-field"><span>实际支付金额：</span><strong>${detail.actualPaymentAmount}</strong></div>
          <div class="order-detail-field"><span>退款时间：</span><strong>${detail.refundTime}</strong></div>
        </div>
      </section>
    </div>
  `;
  const drawer = document.getElementById("detailDrawer");
  drawer.classList.remove("user-detail-mode");
  drawer.classList.add("open", "order-detail-mode");
  drawer.setAttribute("aria-hidden", "false");
  document.getElementById("drawerScrim").classList.add("visible");
  document.body.style.overflow = "hidden";
  drawer.querySelector("[data-close-drawer]").focus();
}

function closeDrawer() {
  const drawer = document.getElementById("detailDrawer");
  drawer.classList.remove("open", "user-detail-mode", "order-detail-mode");
  drawer.setAttribute("aria-hidden", "true");
  document.getElementById("drawerScrim").classList.remove("visible");
  document.body.style.overflow = "";
  state.activeDrawerUser = null;
}

function openActionModal(action, userId) {
  const user = state.users.find((item) => item.id === userId);
  if (!user) return;
  state.modalAction = action;
  state.modalTargets = [user.id];
  const isBlock = action === "block";
  document.getElementById("modalTitle").textContent = isBlock ? "确认封禁用户？" : "确认解除封禁？";
  document.getElementById("modalDescription").textContent = isBlock
    ? "封禁后用户将无法登录游戏，并在登录时看到补款引导。"
    : "确认后用户将立即恢复登录权限，操作将写入审计日志。";
  const remainingPayment = Math.max(getRequiredPaymentTotal(user) - user.supplement, 0);
  const modalAmountSummary = isBlock
    ? `累计退款：${formatMoney(user.refund)}`
    : `已补款：${formatMoney(user.supplement)}　仍需补款：${formatMoney(remainingPayment)}`;
  document.getElementById("modalContext").innerHTML =
    `<strong>${user.name}</strong> · ${user.id}<br>${modalAmountSummary}`;
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
  state.users.forEach((user) => {
    if (state.modalTargets.includes(user.id)) {
      user.status = isBlock ? "blocked" : "recovered";
      if (isBlock) {
        user.unlockMode = null;
        user.unlockOperator = null;
      } else {
        user.unlockMode = "manual";
        user.unlockOperator = "张晓齐";
      }
      user.updated = "2026-07-29 刚刚";
      recentOperatorRecords[user.id] = ["张晓齐", "2026-07-29 刚刚"];
    }
  });
  state.filteredUsers = state.filteredUsers.map(
    (user) => state.users.find((item) => item.id === user.id) || user,
  );
  closeModal();
  closeDrawer();
  renderAllPages();
  switchPage(state.page);
  showToast(
    isBlock ? "封禁操作成功" : "解封操作成功",
    isBlock
      ? "用户状态已更新，审计日志已记录"
      : "用户已解封，审计日志已记录",
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
  const paymentSection = event.target.closest('[data-nav-section="payment"]');
  if (paymentSection) {
    showToast("支付风控", "当前原型展示退款风控子模块", "info");
    return;
  }

  const refundToggle = event.target.closest('[data-nav-toggle="refund"]');
  if (refundToggle) {
    setRefundNavExpanded(refundToggle.getAttribute("aria-expanded") !== "true");
    return;
  }

  const button = event.target.closest("[data-page]");
  if (button) switchPage(button.dataset.page);
});

document.getElementById("projectSelect").addEventListener("change", (event) => {
  if (state.configDirty) {
    state.configDirty = false;
  }
  state.project = event.target.value;
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
  if (!event.target.closest(".date-range-picker")) {
    closeRefundDatePopover();
    closeAuditDatePopover();
  }

  const copyTarget = event.target.closest("[data-copy-value]");
  if (copyTarget) {
    copyTextValue(copyTarget.dataset.copyValue, copyTarget.dataset.copyLabel || "内容");
    return;
  }

  const jump = event.target.closest("[data-page-jump]");
  if (jump) switchPage(jump.dataset.pageJump);

  const viewOrder = event.target.closest("[data-view-order]");
  if (viewOrder) openOrderDrawer(viewOrder.dataset.viewOrder);

  const viewUser = event.target.closest("[data-view-user]");
  if (viewUser) openDrawer(viewUser.dataset.viewUser);

  const action = event.target.closest("[data-user-action]");
  if (action) openActionModal(action.dataset.userAction, action.dataset.userId);

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
    if (actionName === "copy-user" && state.activeDrawerUser) {
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
  const auditDatePopover = document.getElementById("auditDatePopover");
  const refundDatePopover = document.getElementById("refundDatePopover");
  if (auditDatePopover && !auditDatePopover.hidden) closeAuditDatePopover();
  else if (refundDatePopover && !refundDatePopover.hidden) closeRefundDatePopover();
  else if (document.getElementById("modalLayer").classList.contains("visible")) closeModal();
  else if (document.getElementById("detailDrawer").classList.contains("open")) closeDrawer();
  else closeMobileNav();
});

const policyV2State = {
  mode: "protect",
  activeCard: null,
  lastTrigger: null,
  updated: {},
};

const policyV2Cards = {
  trigger: {
    title: "封禁触发规则",
    subtitle: "退款达到阈值后触发登录拦截",
    icon: "rules",
    color: "#1677ff",
    bg: "#e6f4ff",
    summary: [["条件关系", "满足任一"], ["统计周期", "近 30 天"], ["启用规则", "3 项"]],
  },
  recovery: {
    title: "补款解封规则",
    subtitle: "配置补款方式及解封规则",
    icon: "unlock",
    color: "#389e0d",
    bg: "#f6ffed",
    summary: [["补款方式", "网页自助补款"], ["补款地址", "已配置"], ["解封规则", "自动解封"]],
  },
  channels: {
    title: "支付渠道配置",
    subtitle: "配置 Apple Store 与 Google Play 退款通知参数",
    icon: "link",
    color: "#08979c",
    bg: "#e6fffb",
    summary: [["Apple Store", "运行正常"], ["Google Play", "运行正常"], ["通知参数", "已配置"]],
  },
  execution: {
    title: "执行与通知",
    subtitle: "策略执行方式及高风险告警",
    icon: "monitor",
    color: "#531dab",
    bg: "#f9f0ff",
    summary: [["执行方式", "自动执行"], ["告警范围", "高风险事件"], ["审计日志", "已开启"]],
  },
};

function policyModeMeta(mode) {
  return {
    protect: {
      label: "已开启用户风控",
      description: "持续检测退款，命中策略后拦截登录；完成补款后按规则恢复游戏。",
      badgeClass: "",
    },
    monitor: {
      label: "只监测退款数据",
      description: "仅记录和分析 Apple、Google 退款数据，不封禁用户，也不影响游戏登录。",
      badgeClass: "monitoring",
    },
    off: {
      label: "已停用退款风控",
      description: "暂停退款数据检测和用户风控执行，已存在的用户状态不会自动变更。",
      badgeClass: "off",
    },
  }[mode];
}

function renderPolicyModeOption(mode, title, description) {
  const active = policyV2State.mode === mode;
  return `<button class="policy-mode-option ${active ? "active" : ""}" type="button" data-policy-mode="${mode}" aria-pressed="${active}">
    <span class="policy-mode-radio" aria-hidden="true"></span>
    <span class="policy-mode-text"><strong>${title}</strong><small>${description}</small></span>
  </button>`;
}

function renderPolicySummaryCard(key, card) {
  const updateText = policyV2State.updated[key] || "12 分钟前更新";
  return `<button class="policy-summary-card" style="--card-accent:${card.color};--card-bg:${card.bg}" type="button" data-policy-card="${key}" aria-label="配置${card.title}">
    <span class="policy-card-top">
      <span class="policy-card-icon">${icon(card.icon)}</span>
      <span class="policy-card-title"><strong>${card.title}</strong><small>${card.subtitle}</small></span>
      <span class="policy-card-status">已配置</span>
    </span>
    <span class="policy-card-summary">
      ${card.summary.map(([label, value]) => `<span class="policy-brief"><span>${label}</span><strong title="${value}">${value}</strong></span>`).join("")}
    </span>
    <span class="policy-card-footer"><small>${updateText}</small><span>查看并配置 ${icon("arrow")}</span></span>
  </button>`;
}

renderConfig = function renderConfigV2() {
  const mode = policyModeMeta(policyV2State.mode);
  document.getElementById("page-config").innerHTML = `
    ${pageHeading(
      "configTitle",
      "退款策略",
      `策略仅对 ${projects[state.project].name} 生效，不影响其他游戏项目`,
      `<button class="button secondary" type="button" data-action="history">${icon("audit")}变更历史</button>`,
    )}
    <section class="policy-status-hero" aria-labelledby="policyStatusTitle">
      <div class="policy-status-top">
        <div class="policy-status-copy">
          <span class="policy-status-icon">${icon("shield")}</span>
          <div><h2 id="policyStatusTitle">退款风控总状态</h2><p>${mode.description}</p></div>
        </div>
        <span class="policy-live-badge ${mode.badgeClass}">${mode.label}</span>
      </div>
      <div class="policy-mode-grid" role="group" aria-label="退款风控运行模式">
        ${renderPolicyModeOption("protect", "已开启用户风控", "检测退款、拦截登录，并在补款达标后恢复游戏")}
        ${renderPolicyModeOption("monitor", "只监测退款数据", "记录退款与风险结果，但不会限制用户登录")}
        ${renderPolicyModeOption("off", "停用退款风控", "暂停退款检测和所有自动风控动作")}
      </div>
    </section>
    <div class="policy-section-heading">
      <div><h2>策略配置</h2><p>卡片展示当前关键参数，点击进入完整规则配置</p></div>
      <span>共 4 组配置</span>
    </div>
    <section class="policy-card-grid" aria-label="退款策略配置卡片">
      ${Object.entries(policyV2Cards).map(([key, card]) => renderPolicySummaryCard(key, card)).join("")}
    </section>
  `;
  bindPolicyV2Events();
};

function bindPolicyV2Events() {
  document.querySelectorAll("[data-policy-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      policyV2State.mode = button.dataset.policyMode;
      renderConfig();
      const meta = policyModeMeta(policyV2State.mode);
      showToast("退款风控状态已更新", meta.label, policyV2State.mode === "protect" ? "success" : "info");
    });
  });
  document.querySelectorAll("[data-policy-card]").forEach((button) => {
    button.addEventListener("click", () => openPolicyDrawer(button.dataset.policyCard, button));
  });
}

function ensurePolicyDrawer() {
  if (document.getElementById("policyDrawer")) return;
  const scrim = document.createElement("div");
  scrim.id = "policyDrawerScrim";
  scrim.className = "policy-drawer-scrim";
  scrim.addEventListener("click", closePolicyDrawer);
  document.body.appendChild(scrim);

  const drawer = document.createElement("aside");
  drawer.id = "policyDrawer";
  drawer.className = "policy-drawer";
  drawer.setAttribute("role", "dialog");
  drawer.setAttribute("aria-modal", "true");
  drawer.setAttribute("aria-labelledby", "policyDrawerTitle");
  drawer.setAttribute("aria-hidden", "true");
  drawer.innerHTML = `
    <div class="policy-drawer-header">
      <div class="policy-drawer-heading"><h2 id="policyDrawerTitle">策略配置</h2><p id="policyDrawerSubtitle"></p></div>
      <button class="icon-button" id="closePolicyDrawer" type="button" aria-label="关闭策略配置">${icon("close")}</button>
    </div>
    <div class="policy-drawer-body" id="policyDrawerBody"></div>
    <div class="policy-drawer-footer">
      <span class="policy-drawer-save-state" id="policyDrawerSaveState">当前配置已生效</span>
      <div class="policy-drawer-actions">
        <button class="button secondary" id="cancelPolicyDrawer" type="button">取消</button>
        <button class="button" id="savePolicyDrawer" type="button">${icon("check")}保存并发布</button>
      </div>
    </div>`;
  document.body.appendChild(drawer);
  document.getElementById("closePolicyDrawer").addEventListener("click", closePolicyDrawer);
  document.getElementById("cancelPolicyDrawer").addEventListener("click", closePolicyDrawer);
  document.getElementById("savePolicyDrawer").addEventListener("click", savePolicyDrawer);
}

function policyRuleRow(title, description, control) {
  return `<div class="rule-row"><div class="rule-label"><strong>${title}</strong><span>${description}</span></div><div class="rule-control">${control}</div></div>`;
}

function amountControl(prefix, value, suffix, label, checked = true) {
  return `<span>${prefix}</span><div class="number-field"><input class="number-input policy-drawer-input" type="number" value="${value}" min="0" aria-label="${label}"><span class="suffix">${suffix}</span></div><label class="switch"><input class="policy-drawer-input" type="checkbox" ${checked ? "checked" : ""} aria-label="启用${label}"><span class="switch-track"></span></label>`;
}

function drawerSection(title, description, content) {
  return `<section class="policy-drawer-section"><div class="policy-drawer-section-head"><h3>${title}</h3><p>${description}</p></div><div class="policy-drawer-section-body">${content}</div></section>`;
}

function triggerDrawerContent() {
  const mainRules = [
    policyRuleRow("单笔退款金额", "单笔退款达到此金额时触发封禁", amountControl("≥", 128, "元", "单笔退款金额规则")),
    policyRuleRow("累计退款金额", "滚动 30 天内累计退款达到此金额", amountControl("30 天内 ≥", 300, "元", "累计退款金额规则")),
    policyRuleRow("累计退款笔数", "识别多笔小额高频退款", amountControl("30 天内 ≥", 2, "笔", "累计退款笔数规则")),
    policyRuleRow("退款后资产消耗", "商品已使用或转移时提高风险等级", `<span>自动升为高风险</span><label class="switch"><input class="policy-drawer-input" type="checkbox" checked aria-label="启用退款后资产消耗规则"><span class="switch-track"></span></label>`),
  ].join("");
  const exemption = policyRuleRow("首次低额退款", "首次退款且金额低于阈值时仅记录", amountControl("低于", 30, "元", "首次低额退款豁免"));
  return drawerSection("封禁触发条件", "任一启用条件满足时，用户会进入退款风控", mainRules) + drawerSection("低额退款豁免", "减少低价值订单导致的误拦截", exemption);
}

function recoveryDrawerContent() {
  const radios = `<div class="radio-stack">
    <label class="radio-option selected"><input class="policy-drawer-input" type="radio" name="v2-recovery" checked><span><strong>补足全部未追回退款金额</strong><span>补款金额 = 累计退款金额 - 已补款金额</span></span></label>
    <label class="radio-option"><input class="policy-drawer-input" type="radio" name="v2-recovery"><span><strong>补足固定比例</strong><span>达到指定退款金额比例后即可解封</span></span></label>
    <label class="radio-option"><input class="policy-drawer-input" type="radio" name="v2-recovery"><span><strong>人工审核后解封</strong><span>补款完成后由运营确认是否恢复登录</span></span></label>
  </div>`;
  const autoRules = [
    policyRuleRow("最低补款金额", "低于此金额仍保持登录拦截", `<div class="number-field"><input class="number-input policy-drawer-input" type="number" value="30" min="0" aria-label="最低补款金额"><span class="suffix">元</span></div>`),
    policyRuleRow("补款完成后自动解封", "支付校验成功后即时恢复游戏登录", `<span>预计 1 分钟内</span><label class="switch"><input class="policy-drawer-input" type="checkbox" checked aria-label="补款后自动解封"><span class="switch-track"></span></label>`),
    policyRuleRow("二次退款加重处理", "再次退款时禁止自动解封", `<label class="switch"><input class="policy-drawer-input" type="checkbox" checked aria-label="二次退款加重处理"><span class="switch-track"></span></label>`),
  ].join("");
  return drawerSection("补款金额计算", "选择用户需要完成的补款要求", radios) + drawerSection("解封执行", "配置补款完成后的处理方式", autoRules);
}

function channelsDrawerContent() {
  const channelStatus = `<div class="channel-compact"><span class="store-symbol apple">A</span><span class="channel-compact-copy"><strong>Apple Store</strong><small>最近同步时间：2026-08-11 17:10</small></span><span class="status-tag success">运行正常</span></div>
    <div class="channel-compact"><span class="store-symbol google"></span><span class="channel-compact-copy"><strong>Google Play</strong><small>最近同步时间：2026-08-11 17:08</small></span><span class="status-tag success">运行正常</span></div>`;
  const appleConfig = [
    policyRuleRow("appid", "Apple Store 应用标识", `<input class="input policy-drawer-input" type="text" value="com.example.nebula.ios" aria-label="Apple Store appid">`),
    policyRuleRow("appidSecret", "用于校验 Apple Store 退款通知", `<input class="input policy-drawer-input" type="password" value="apple-notify-secret" aria-label="Apple Store appidSecret">`),
  ].join("");
  const googleConfig = [
    policyRuleRow("appId", "Google Play 应用标识", `<input class="input policy-drawer-input" type="text" value="com.example.nebula.android" aria-label="Google Play appId">`),
    policyRuleRow("appidSecret", "用于校验 Google Play 退款通知", `<input class="input policy-drawer-input" type="password" value="google-notify-secret" aria-label="Google Play appidSecret">`),
  ].join("");
  return drawerSection("支付渠道状态", "展示渠道运行状态与最近同步时间", channelStatus)
    + drawerSection("Apple Store配置", "填写 Apple Store 退款通知参数", appleConfig)
    + drawerSection("Google Play配置", "填写 Google Play 退款通知参数", googleConfig);
}

function executionDrawerContent() {
  const modes = `<div class="radio-stack">
    <label class="radio-option selected"><input class="policy-drawer-input" type="radio" name="v2-execution" checked><span><strong>自动执行封禁与解封</strong><span>命中后立即执行，全部操作写入审计日志</span></span></label>
    <label class="radio-option"><input class="policy-drawer-input" type="radio" name="v2-execution"><span><strong>人工审核后执行</strong><span>进入待审核列表，不直接拦截登录</span></span></label>
    <label class="radio-option"><input class="policy-drawer-input" type="radio" name="v2-execution"><span><strong>观察模式</strong><span>仅记录命中结果，用于策略上线前验证</span></span></label>
  </div>`;
  const notices = [
    policyRuleRow("高风险事件告警", "命中高金额或高频规则时通知值班人员", `<label class="switch"><input class="policy-drawer-input" type="checkbox" checked aria-label="高风险事件告警"><span class="switch-track"></span></label>`),
    policyRuleRow("操作审计日志", "记录策略、封禁和解封的完整操作轨迹", `<span>保留 180 天</span><label class="switch"><input class="policy-drawer-input" type="checkbox" checked aria-label="操作审计日志"><span class="switch-track"></span></label>`),
  ].join("");
  return drawerSection("策略执行方式", "配置命中风险后的系统动作", modes) + drawerSection("通知与审计", "确保高风险事件可追踪、可复盘", notices);
}

function openPolicyDrawer(key, trigger) {
  ensurePolicyDrawer();
  const card = policyV2Cards[key];
  if (!card) return;
  policyV2State.activeCard = key;
  policyV2State.lastTrigger = trigger || null;
  document.getElementById("policyDrawerTitle").textContent = card.title;
  document.getElementById("policyDrawerSubtitle").textContent = `${projects[state.project].name} · 修改后仅对当前项目生效`;
  const content = {
    trigger: triggerDrawerContent,
    recovery: recoveryDrawerContent,
    channels: channelsDrawerContent,
    execution: executionDrawerContent,
  }[key]();
  document.getElementById("policyDrawerBody").innerHTML = content;
  const saveState = document.getElementById("policyDrawerSaveState");
  saveState.className = "policy-drawer-save-state";
  saveState.textContent = "当前配置已生效";
  document.querySelectorAll(".policy-drawer-input").forEach((input) => {
    input.addEventListener("change", () => {
      saveState.className = "policy-drawer-save-state dirty";
      saveState.textContent = "有未保存的修改";
      if (input.type === "radio") {
        input.closest(".radio-stack")?.querySelectorAll(".radio-option").forEach((option) => option.classList.remove("selected"));
        input.closest(".radio-option")?.classList.add("selected");
      }
    });
  });
  const drawer = document.getElementById("policyDrawer");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.getElementById("policyDrawerScrim").classList.add("visible");
  document.body.style.overflow = "hidden";
  window.setTimeout(() => document.getElementById("closePolicyDrawer").focus(), 30);
}

function closePolicyDrawer() {
  const drawer = document.getElementById("policyDrawer");
  if (!drawer) return;
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.getElementById("policyDrawerScrim").classList.remove("visible");
  document.body.style.overflow = "";
  const trigger = policyV2State.lastTrigger;
  policyV2State.activeCard = null;
  window.setTimeout(() => trigger?.focus(), 30);
}

function savePolicyDrawer() {
  const key = policyV2State.activeCard;
  if (!key) return;
  const button = document.getElementById("savePolicyDrawer");
  const original = button.innerHTML;
  button.disabled = true;
  button.textContent = "正在发布…";
  window.setTimeout(() => {
    button.disabled = false;
    button.innerHTML = original;
    policyV2State.updated[key] = "刚刚更新";
    closePolicyDrawer();
    renderConfig();
    showToast("策略配置已发布", `已应用至 ${projects[state.project].name}`, "success");
  }, 650);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.getElementById("policyDrawer")?.classList.contains("open")) {
    closePolicyDrawer();
  }
}, true);


renderAllPages();
switchPage("users");

const policyV3NaturalDescriptions = {
  trigger: "用户<strong>单笔退款达到 ¥128</strong>，或 30 天内累计退款达到 ¥300、累计退款 2 笔时，系统会自动拦截登录。首次低于 ¥30 的退款仅记录，不封禁。",
  recovery: "默认要求用户<strong>补足全部未追回金额</strong>；补款不少于 ¥30 且校验成功后，系统会在 1 分钟内自动解除封禁。",
  channels: "Apple App Store 和 Google Play 的退款数据均<strong>接入正常</strong>，系统每 5 分钟扫描一次漏单，并对失败任务自动重试。",
  execution: "策略命中后由系统<strong>自动执行封禁和解封</strong>；高风险事件会通知值班人员，所有操作日志保留 180 天。",
};

const userPaymentRequirements = new Map();

const policyV3CardTitles = {
  trigger: "封禁规则配置",
  recovery: "解封规则配置",
  channels: "支付渠道配置",
};

const v3DemoBaseUser = baseUsers.find((user) => user.id === "U-87924130");
if (v3DemoBaseUser) {
  v3DemoBaseUser.refund = 20000;
  v3DemoBaseUser.count = 8;
  v3DemoBaseUser.trigger = "高金额退款 + 高频退款";
}
const v3DemoStateUser = state.users.find((user) => user.id === "U-87924130");
if (v3DemoStateUser) {
  v3DemoStateUser.refund = 20000;
  v3DemoStateUser.count = 8;
  v3DemoStateUser.trigger = "高金额退款 + 高频退款";
  state.filteredUsers = state.users.map((user) => ({ ...user }));
}
userPaymentRequirements.set("nebula:U-87924130", 2000);

renderPolicySummaryCard = function renderPolicySummaryCardV3(key, card) {
  const updateText = policyV2State.updated[key] || "更新时间 2026/07/07 12:00";
  const groupTitle = policyV3CardTitles[key] || card.title;
  return `<button class="policy-summary-card" style="--card-accent:${card.color};--card-bg:${card.bg}" type="button" data-policy-card="${key}" aria-label="配置${groupTitle}">
    <span class="policy-card-top">
      <span class="policy-card-icon">${icon(card.icon)}</span>
      <span class="policy-card-title"><strong>${card.title}</strong><small>${card.subtitle}</small></span>
      <span class="policy-card-status">已配置</span>
    </span>
    <span class="policy-card-description">${policyV3NaturalDescriptions[key]}</span>
    <span class="policy-card-footer"><small>${updateText}</small><span>查看并配置 ${icon("arrow")}</span></span>
  </button>`;
};

function renderPolicyConfigGroup(key) {
  const card = policyV2Cards[key];
  const title = policyV3CardTitles[key] || card.title;
  return `<section class="policy-config-group" aria-labelledby="policy-config-title-${key}">
    <div class="policy-config-group-heading">
      <h2 id="policy-config-title-${key}">${title}</h2>
    </div>
    <div class="policy-card-grid">
      ${renderPolicySummaryCard(key, card)}
    </div>
  </section>`;
}

renderConfig = function renderConfigV3() {
  const mode = policyModeMeta(policyV2State.mode);
  const statusLabel = policyV2State.mode === "protect" ? "已开启风控" : mode.label;
  document.getElementById("page-config").innerHTML = `
    ${pageHeading(
      "configTitle",
      "退款策略",
      "精细管控账号退款行为，自动封禁与补款解封规则一键配置",
    )}
    <section class="policy-status-hero" aria-labelledby="policyStatusTitle">
      <div class="policy-status-top">
        <div class="policy-status-copy">
          <span class="policy-status-icon">${icon("shield")}</span>
          <div class="policy-status-content">
            <span class="policy-live-badge ${mode.badgeClass}" id="policyStatusTitle">${statusLabel}</span>
            <p>${mode.description}</p>
          </div>
        </div>
        <div class="policy-status-actions">
          <button class="button secondary" type="button" data-policy-status-edit>${icon("settings")}修改状态</button>
        </div>
      </div>
    </section>
    <section class="policy-config-groups" aria-label="退款策略配置">
      ${["trigger", "recovery", "channels"]
        .map((key) => renderPolicyConfigGroup(key))
        .join("")}
    </section>
  `;
  bindPolicyV3Events();
};

function bindPolicyV3Events() {
  document.querySelector("[data-policy-status-edit]")?.addEventListener("click", (event) => openPolicyDrawer("status", event.currentTarget));
  document.querySelectorAll("[data-policy-card]").forEach((button) => {
    button.addEventListener("click", () => openPolicyDrawer(button.dataset.policyCard, button));
  });
}

function statusDrawerContent() {
  const options = [
    ["protect", "已开启用户风控", "检测退款、拦截登录，并在补款达标后恢复游戏", "推荐"],
    ["monitor", "只监测退款数据", "记录退款与风险结果，不会封禁用户或限制登录", ""],
    ["off", "停用退款风控", "暂停退款检测和所有自动风控动作", ""],
  ];
  const choices = options.map(([value, title, description, tag]) => {
    const selected = policyV2State.mode === value;
    return `<label class="status-choice ${selected ? "selected" : ""}">
      <input class="policy-drawer-input" type="radio" name="v3-policy-mode" value="${value}" ${selected ? "checked" : ""}>
      <span class="status-choice-copy"><strong>${title}</strong><span>${description}</span></span>
      ${tag ? `<span class="status-choice-tag">${tag}</span>` : ""}
    </label>`;
  }).join("");
  return drawerSection("选择运行状态", "保存后仅对当前游戏项目生效", `<div class="status-choice-list">${choices}</div>`)
    + drawerSection("切换说明", "不同状态对玩家和数据的影响", `<div style="padding:14px 0;color:#60758d;font-size:12px;line-height:1.7">切换为“只监测退款数据”后，系统仍会保留退款记录和风险判断，但不会新增登录拦截；停用后将暂停商店退款检测。</div>`);
}

openPolicyDrawer = function openPolicyDrawerV3(key, trigger) {
  ensurePolicyDrawer();
  const statusCard = { title: "退款风控总状态" };
  const card = key === "status" ? statusCard : policyV2Cards[key];
  if (!card) return;
  policyV2State.activeCard = key;
  policyV2State.lastTrigger = trigger || null;
  document.getElementById("policyDrawerTitle").textContent = card.title;
  document.getElementById("policyDrawerSubtitle").textContent = `${projects[state.project].name} · 修改后仅对当前项目生效`;
  const contentFactory = {
    status: statusDrawerContent,
    trigger: triggerDrawerContent,
    recovery: recoveryDrawerContent,
    channels: channelsDrawerContent,
    execution: executionDrawerContent,
  }[key];
  document.getElementById("policyDrawerBody").innerHTML = contentFactory();
  const saveState = document.getElementById("policyDrawerSaveState");
  saveState.className = "policy-drawer-save-state";
  saveState.textContent = "当前配置已生效";
  document.querySelectorAll(".policy-drawer-input").forEach((input) => {
    input.addEventListener("change", () => {
      saveState.className = "policy-drawer-save-state dirty";
      saveState.textContent = "有未保存的修改";
      if (input.type === "radio") {
        const group = input.closest(".radio-stack, .status-choice-list");
        group?.querySelectorAll(".radio-option, .status-choice").forEach((option) => option.classList.remove("selected"));
        input.closest(".radio-option, .status-choice")?.classList.add("selected");
      }
    });
  });
  const drawer = document.getElementById("policyDrawer");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.getElementById("policyDrawerScrim").classList.add("visible");
  document.body.style.overflow = "hidden";
  window.setTimeout(() => document.getElementById("closePolicyDrawer").focus(), 30);
};

savePolicyDrawer = function savePolicyDrawerV3() {
  const key = policyV2State.activeCard;
  if (!key) return;
  const selectedMode = key === "status" ? document.querySelector('input[name="v3-policy-mode"]:checked')?.value : null;
  const button = document.getElementById("savePolicyDrawer");
  const original = button.innerHTML;
  button.disabled = true;
  button.textContent = "正在发布…";
  window.setTimeout(() => {
    button.disabled = false;
    button.innerHTML = original;
    if (selectedMode) policyV2State.mode = selectedMode;
    if (key !== "status") policyV2State.updated[key] = "刚刚更新";
    closePolicyDrawer();
    renderConfig();
    syncUserRiskStatusBadge();
    const message = key === "status" ? policyModeMeta(policyV2State.mode).label : "策略配置已发布";
    showToast(key === "status" ? "退款风控状态已更新" : "策略配置已发布", message, "success");
  }, 650);
};

function syncUserRiskStatusBadge() {
  const badge = document.querySelector("#page-users .scope-mode");
  if (!badge) return;
  const meta = policyModeMeta(policyV2State.mode);
  badge.textContent = policyV2State.mode === "protect" ? "已开启退款风控" : meta.label;
  badge.classList.toggle("monitor-mode", policyV2State.mode === "monitor");
  badge.classList.toggle("off-mode", policyV2State.mode === "off");
}

const renderUsersBeforeV3 = renderUsers;
renderUsers = function renderUsersV3() {
  renderUsersBeforeV3();
  syncUserRiskStatusBadge();
};

function paymentRequirementKey(userId) {
  return `${state.project}:${userId}`;
}

function getRequiredPaymentTotal(user) {
  const custom = userPaymentRequirements.get(paymentRequirementKey(user.id));
  if (typeof custom === "number") return Math.min(custom, user.refund);
  return user.refund;
}

const openUserDrawerBeforeV3 = openDrawer;
openDrawer = function openDrawerV3(userId) {
  openUserDrawerBeforeV3(userId);
  enhanceUserPaymentRequirement(userId);
};

function enhanceUserPaymentRequirement(userId) {
  const user = state.users.find((item) => item.id === userId);
  const facts = document.querySelector("#detailDrawer .drawer-facts");
  if (!user || !facts) return;
  const targetFact = facts.children[2];
  if (!targetFact) return;
  targetFact.classList.add("payment-threshold-fact");

  const editor = document.createElement("section");
  editor.className = "payment-threshold-panel";
  editor.hidden = true;
  editor.innerHTML = `
    <div class="payment-threshold-head">
      <div><h4>设置解封所需补款</h4><p>可低于退款总额，保存后作为该用户的解封条件</p></div>
      <button class="icon-button" type="button" data-close-payment-editor aria-label="收起补款设置">${icon("close")}</button>
    </div>
    <div class="payment-reference-grid">
      <div class="payment-reference"><span>累计退款总额</span><strong>${formatMoney(user.refund)}</strong></div>
      <div class="payment-reference"><span>用户已补款</span><strong>${formatMoney(user.supplement)}</strong></div>
    </div>
    <div class="payment-input-row">
      <div class="form-field">
        <label for="requiredPaymentInput">达到解封条件需补款总额</label>
        <div class="number-field"><input class="number-input" id="requiredPaymentInput" type="number" min="0" max="${user.refund}" step="1" inputmode="decimal"><span class="suffix">元</span></div>
      </div>
      <button class="button" type="button" data-save-payment-requirement>${icon("check")}保存金额</button>
    </div>
    <p class="payment-threshold-help">例如累计退款 ${formatMoney(user.refund)}，可以手动设置只需补款 ${formatMoney(Math.min(2000, user.refund))} 即可解除封禁。</p>
    <div class="payment-threshold-error" id="paymentThresholdError" role="alert"></div>`;
  facts.insertAdjacentElement("afterend", editor);

  const input = editor.querySelector("#requiredPaymentInput");
  const error = editor.querySelector("#paymentThresholdError");

  function refreshTargetFact() {
    const requiredTotal = getRequiredPaymentTotal(user);
    const remaining = Math.max(requiredTotal - user.supplement, 0);
    const isManual = userPaymentRequirements.has(paymentRequirementKey(user.id));
    targetFact.innerHTML = `<span class="fact-label-row"><span>仍需补款</span>${isManual ? '<span class="manual-setting-tag">人工设置</span>' : ""}</span><span class="payment-threshold-value-row"><strong style="color:${remaining > 0 ? "#d46b08" : "#389e0d"}">${formatMoney(remaining)}</strong><button class="payment-threshold-edit" type="button" data-edit-payment-requirement aria-label="设置补款金额" title="设置补款金额">${icon("edit")}</button></span>`;
    targetFact.querySelector("[data-edit-payment-requirement]").addEventListener("click", () => {
      input.value = requiredTotal;
      error.textContent = "";
      editor.hidden = false;
      window.setTimeout(() => input.focus(), 30);
    });
  }

  editor.querySelector("[data-close-payment-editor]").addEventListener("click", () => {
    editor.hidden = true;
    targetFact.querySelector("[data-edit-payment-requirement]")?.focus();
  });

  input.addEventListener("input", () => {
    error.textContent = "";
  });

  input.addEventListener("blur", () => {
    const amount = Number(input.value);
    if (input.value === "" || !Number.isFinite(amount) || amount < 0) {
      error.textContent = "请输入大于或等于 0 的有效金额。";
    } else if (amount > user.refund) {
      error.textContent = `解封补款总额不能超过累计退款 ${formatMoney(user.refund)}。`;
    }
  });

  editor.querySelector("[data-save-payment-requirement]").addEventListener("click", () => {
    const amount = Number(input.value);
    if (!Number.isFinite(amount) || amount < 0) {
      error.textContent = "请输入大于或等于 0 的有效金额。";
      input.focus();
      return;
    }
    if (amount > user.refund) {
      error.textContent = `解封补款总额不能超过累计退款 ${formatMoney(user.refund)}。`;
      input.focus();
      return;
    }
    const previousAmount = getRequiredPaymentTotal(user);
    userPaymentRequirements.set(paymentRequirementKey(user.id), amount);
    if (amount !== previousAmount) {
      const eventTime = shiftDrawerDateTime(new Date().toISOString());
      user.paymentRequirementEvents = [{
        title: "人工设置补款金额",
        detail: `解封所需补款总额由 ${formatMoney(previousAmount)} 调整为 ${formatMoney(amount)}`,
        time: eventTime,
        amount: formatMoney(amount),
        amountClass: "manual",
        operator: "张晓齐",
        color: "#1677ff",
        fill: "#e6f4ff",
      }, ...(Array.isArray(user.paymentRequirementEvents) ? user.paymentRequirementEvents : [])];
      const timeline = document.querySelector("#drawer-timeline .timeline");
      if (timeline) timeline.innerHTML = renderDrawerRiskTimeline(user);
    }
    editor.hidden = true;
    refreshTargetFact();
    const remaining = Math.max(amount - user.supplement, 0);
    showToast("解封补款金额已更新", remaining > 0 ? `用户再补 ${formatMoney(remaining)} 即可满足解封条件` : "用户已达到解封条件，可执行解封", "success");
  });

  refreshTargetFact();
}

renderAllPages();
switchPage("users");

/* Version 3 refinement requested from the rule drawer reference */
const recentOperatorRecords = {
  "U-87924130": ["林晓", "2026-08-06 14:32"],
  "U-50192847": ["系统", "2026-08-06 13:48"],
  "U-79241650": ["系统", "2026-08-06 12:16"],
  "U-29410586": ["周岚", "2026-08-06 11:05"],
  "U-81650329": ["系统", "2026-08-06 10:29"],
  "U-43018726": ["周岚", "2026-08-06 09:54"],
  "U-30561974": ["林晓", "2026-08-06 09:12"],
  "U-67182495": ["系统", "2026-08-06 08:37"],
};

function addRecentOperatorColumn() {
  const table = document.querySelector("#page-users .data-table");
  if (!table) return;
  const headerRow = table.querySelector("thead tr");
  if (headerRow && !headerRow.querySelector(".recent-operator-header")) {
    const header = document.createElement("th");
    header.className = "recent-operator-header";
    header.textContent = "最近操作人";
    headerRow.insertBefore(header, headerRow.lastElementChild);
  }
  const rows = table.querySelectorAll("tbody tr");
  if (!state.filteredUsers.length) {
    rows[0]?.querySelector("td")?.setAttribute("colspan", "8");
    return;
  }
  rows.forEach((row, index) => {
    if (row.querySelector(".recent-operator-cell")) return;
    const user = state.filteredUsers[index];
    if (!user || !row.lastElementChild) return;
    const [operator, time] = recentOperatorRecords[user.id] || ["系统", user.updated];
    const cell = document.createElement("td");
    cell.className = "recent-operator-cell";
    cell.innerHTML = `<span class="operator-stack"><strong>${operator}</strong><span>${time}</span></span>`;
    row.insertBefore(cell, row.lastElementChild);
  });
}

const renderUsersBeforeRefinement = renderUsers;
renderUsers = function renderUsersRefined() {
  renderUsersBeforeRefinement();
  addRecentOperatorColumn();
};

const refreshUserTableBeforeRefinement = refreshUserTable;
refreshUserTable = function refreshUserTableRefined() {
  refreshUserTableBeforeRefinement();
  addRecentOperatorColumn();
};

function policyPeriodOptions(selected = 30) {
  return [7, 30, 60, 180, 360]
    .map((days) => `<option value="${days}" ${days === selected ? "selected" : ""}>${days} 天</option>`)
    .join("");
}

function periodRuleControl(value, suffix, label, selectedDays = 30) {
  return `<select class="select policy-period-select policy-drawer-input" aria-label="${label}时间范围">${policyPeriodOptions(selectedDays)}</select><span>内 ≥</span><div class="number-field"><input class="number-input policy-drawer-input" type="number" value="${value}" min="0" aria-label="${label}"><span class="suffix">${suffix}</span></div><label class="switch"><input class="policy-drawer-input" type="checkbox" checked aria-label="启用${label}"><span class="switch-track"></span></label>`;
}

policyV2State.triggerSettings = {
  relation: "any",
  periodDays: 30,
  thresholds: {
    singleAmount: 128,
    cumulativeAmount: 300,
    cumulativeCount: 2,
  },
  enabled: {
    singleAmount: true,
    cumulativeAmount: true,
    cumulativeCount: true,
  },
};

function triggerThresholdControl(key, value, suffix, label, min = 0) {
  const enabled = policyV2State.triggerSettings.enabled[key];
  return `<span>≥</span><div class="number-field"><input class="number-input policy-drawer-input" data-trigger-threshold="${key}" type="number" value="${value}" min="${min}" required aria-label="${label}"><span class="suffix">${suffix}</span></div><label class="switch"><input class="policy-drawer-input" data-trigger-enabled="${key}" type="checkbox" ${enabled ? "checked" : ""} aria-label="启用${label}"><span class="switch-track"></span></label>`;
}

function updateTriggerPolicySummary(settings) {
  const relationText = settings.relation === "all" ? "满足所有" : "满足任一";
  const enabledCount = Object.values(settings.enabled).filter(Boolean).length;
  policyV2Cards.trigger.summary = [
    ["条件关系", relationText],
    ["统计周期", `近 ${settings.periodDays} 天`],
    ["启用规则", `${enabledCount} 项`],
  ];
  policyV3NaturalDescriptions.trigger = `已启用 <strong>${enabledCount} 项</strong>封禁规则；${relationText}条件时触发封禁，累计指标统计账号近 ${settings.periodDays} 天的退款订单。`;
}

function triggerDrawerSection(title, description, content, className = "") {
  return `<section class="policy-drawer-section trigger-section ${className}">
    <div class="policy-drawer-section-head trigger-section-head">
      <div class="trigger-section-heading">
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    </div>
    <div class="policy-drawer-section-body">${content}</div>
  </section>`;
}

triggerDrawerContent = function triggerDrawerContentRefined() {
  const mainRules = [
    policyRuleRow("单笔退款金额", "单笔退款达到此金额时触发封禁", amountControl("≥", 128, "元", "单笔退款金额规则")),
    policyRuleRow("累计退款金额", "在选定周期内累计退款达到此金额", periodRuleControl(300, "元", "累计退款金额规则")),
    policyRuleRow("累计退款笔数", "在选定周期内识别多笔小额高频退款", periodRuleControl(2, "笔", "累计退款笔数规则")),
  ].join("");
  const exemption = policyRuleRow("首次低额退款", "首次退款且金额低于阈值时仅记录", amountControl("低于", 30, "元", "首次低额退款豁免"));
  return drawerSection("封禁触发条件", "任一启用条件满足时，用户会进入退款风控", mainRules)
    + drawerSection("低额退款豁免", "减少低价值订单导致的误拦截", exemption);
};

policyV2State.recoverySettings = {
  paymentMethod: "web",
  paymentUrl: "https://pay.example.com/refund/nebula",
  unlockRule: "auto",
};

recoveryDrawerContent = function recoveryDrawerContentRefined() {
  const handling = `<div class="radio-stack">
    <label class="radio-option selected"><input class="policy-drawer-input" type="radio" name="v3-recovery" value="auto" checked><span><strong>补款完成后自动解封</strong><span>用户补款达到详情页单独设置的金额后，系统自动恢复登录</span></span></label>
    <label class="radio-option"><input class="policy-drawer-input" type="radio" name="v3-recovery" value="manual"><span><strong>补款完成后人工审核</strong><span>达到设置金额后进入待审核列表，由运营确认是否解封</span></span></label>
  </div>`;
  const repeatedRefund = policyRuleRow("二次退款加重处理", "已补款解封用户再次退款时转为人工审核", `<label class="switch"><input class="policy-drawer-input" type="checkbox" checked aria-label="二次退款加重处理"><span class="switch-track"></span></label>`);
  return drawerSection("补款金额计算", "补款金额在受控用户详情中按用户单独设置", handling)
    + drawerSection("重复退款处理", "控制已解封用户再次退款后的处置方式", repeatedRefund);
};

updateTriggerPolicySummary(policyV2State.triggerSettings);
policyV3NaturalDescriptions.recovery = "补款金额在用户详情中<strong>按用户单独设置</strong>；达到指定金额后自动解封，也可选择进入人工审核。";

function syncTriggerPeriodHint() {
  const input = document.getElementById("triggerPeriodDays");
  const period = Number(input?.value);
  const hint = document.getElementById("triggerPeriodHint");
  if (!hint) return;
  hint.textContent = Number.isInteger(period) && period >= 7 && period <= 360
    ? `统计该账号近 ${period} 天的退款订单`
    : "请输入 7 至 360 天的整数";
}

function bindTriggerSettingsEvents() {
  document.getElementById("triggerPeriodDays")?.addEventListener("input", (event) => {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.setAttribute("aria-invalid", "false");
    syncTriggerPeriodHint();
  });
  document.querySelectorAll("[data-trigger-threshold]").forEach((input) => {
    input.addEventListener("input", () => input.classList.remove("invalid"));
  });
  syncTriggerPeriodHint();
}

function syncRecoveryPaymentAddress() {
  const method = document.querySelector('input[name="v4-payment-method"]:checked')?.value;
  const field = document.getElementById("recoveryPaymentAddressField");
  const input = document.getElementById("recoveryPaymentAddress");
  if (!field || !input) return;
  const showAddress = method === "web";
  field.hidden = !showAddress;
  input.required = showAddress;
  input.classList.remove("invalid");
  input.setAttribute("aria-invalid", "false");
  const error = document.getElementById("recoveryPaymentAddressError");
  if (error) {
    error.hidden = true;
    error.textContent = "";
  }
}

function bindRecoverySettingsEvents() {
  document.querySelectorAll('input[name="v4-payment-method"]').forEach((input) => {
    input.addEventListener("change", syncRecoveryPaymentAddress);
  });
  document.getElementById("recoveryPaymentAddress")?.addEventListener("input", (event) => {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.setAttribute("aria-invalid", "false");
    const error = document.getElementById("recoveryPaymentAddressError");
    if (error) {
      error.hidden = true;
      error.textContent = "";
    }
  });
  syncRecoveryPaymentAddress();
}

const openPolicyDrawerBeforeRefinement = openPolicyDrawer;
openPolicyDrawer = function openPolicyDrawerRefined(key, trigger) {
  document.querySelectorAll(".policy-summary-card.selected").forEach((card) => card.classList.remove("selected"));
  if (trigger?.classList.contains("policy-summary-card")) trigger.classList.add("selected");
  openPolicyDrawerBeforeRefinement(key, trigger);
  if (key === "trigger") bindTriggerSettingsEvents();
  if (key === "recovery") bindRecoverySettingsEvents();
};

const savePolicyDrawerBeforeRecoveryRefinement = savePolicyDrawer;
savePolicyDrawer = function savePolicyDrawerRecoveryVersion4() {
  savePolicyDrawerBeforeRecoveryRefinement();
};

const savePolicyDrawerBeforeTriggerRefinement = savePolicyDrawer;
savePolicyDrawer = function savePolicyDrawerTriggerVersion4() {
  savePolicyDrawerBeforeTriggerRefinement();
};

const closePolicyDrawerBeforeRefinement = closePolicyDrawer;
closePolicyDrawer = function closePolicyDrawerRefined() {
  document.querySelectorAll(".policy-summary-card.selected").forEach((card) => card.classList.remove("selected"));
  closePolicyDrawerBeforeRefinement();
};

renderAllPages();
switchPage("users");

/* Version 4 platform topbar prototype interactions */
document.querySelectorAll("[data-global-nav]").forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.globalNav;
    if (target === "risk") {
      showToast("支付风控", "当前正在使用支付风控模块", "info");
      return;
    }
    showToast(
      target === "console" ? "游戏控制台" : "项目管理",
      "该一级模块不在本次支付风控原型范围内",
      "info",
    );
  });
});

const platformActionMessages = {
  docs: ["文档中心", "可在此查看平台接入与风控说明"],
  downloads: ["下载中心", "当前没有进行中的导出任务"],
  notifications: ["通知中心", "有 1 条新的高风险退款提醒"],
  account: ["账号菜单", "当前登录账号：张晓齐"],
};

document.querySelectorAll("[data-platform-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const [title, detail] = platformActionMessages[button.dataset.platformAction];
    showToast(title, detail, "info");
  });
});
