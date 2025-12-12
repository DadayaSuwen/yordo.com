export const COMPANY_DATA = {
  name: "江西元道分子化学股份有限公司",
  shortName: "元道分子",
  enName: "Jiangxi Yuandao Molecular Chemistry Co., Ltd.",
  address: "江西省九江市永修县云山经济开发区星火工业园",
  phone: "181-7926-7699",
  email: "1179002658@qq.com",
  domain: "www.yordo.cn",
};

export const PRODUCTS = [
  {
    id: 1,
    name: "新癸酸乙烯酯 (W10)",
    enName: "Vinyl Neodecanoate (W10)",
    // 建议图片：/image/unnamed.jpg
    desc: "高端乳液改性的理想单体。凭借独特的叔碳结构，赋予聚合物极佳的耐水解性、耐擦洗性及户外耐候性。",
    features: ["极致耐候", "强疏水性", "单体改性"],
    applications: ["外墙涂料", "木器漆", "防腐涂层"],
    icon: "Beaker",
    bgClass: "bg-blue-500", // 示例颜色
    code: "W10",
  },
  {
    id: 2,
    name: "新癸酸缩水甘油酯 (F10)",
    enName: "Glycidyl Neodecanoate (F10)",
    // 建议图片：/image/unnamed (1).jpg
    desc: "高性能环氧树脂活性稀释剂。在大幅降低体系粘度的同时，显著提升漆膜的丰满度、流平性及层间附着力。",
    features: ["低粘度", "高反应活性", "优异流平"],
    applications: ["汽车漆", "工业地坪", "电子胶粘"],
    icon: "FlaskConical",
    bgClass: "bg-emerald-500",
    code: "F10",
  },
  {
    id: 3,
    name: "新癸酸 (A10)",
    enName: "Neodecanoic Acid (A10)",
    // 建议图片：/image/unnamed (2).jpg
    desc: "高位阻支链羧酸中间体。具有卓越的化学稳定性与溶解性，是合成金属盐催干剂、轮胎粘合剂及过氧化物的关键原料。",
    features: ["高立体位阻", "化学稳定性", "关键中间体"],
    applications: ["金属加工", "橡胶助剂", "合成医药"],
    icon: "ShieldCheck",
    bgClass: "bg-slate-500",
    code: "A10",
  },
];

export const MILESTONES = [
  {
    year: "2015",
    title: "公司成立",
    desc: "江西元道分子化学股份有限公司正式在星火工业园注册成立，启动一期工程建设。",
  },
  {
    year: "2017",
    title: "投产运营",
    desc: "年产5万吨叔碳酸生产线一次性试车成功，打破国外技术垄断。",
  },
  {
    year: "2019",
    title: "体系认证",
    desc: "通过ISO9001质量管理体系及ISO14001环境管理体系双重认证。",
  },
  {
    year: "2021",
    title: "产能扩建",
    desc: "二期工程竣工，综合产能突破20万吨，产品出口至东南亚及欧洲市场。",
  },
  {
    year: "2024",
    title: "创新中心",
    desc: "元道分子江西研发中心落成，专注于特种环氧单体的深度开发。",
  },
];

export const CASES = [
  {
    id: 1,
    title: "某知名品牌汽车原厂漆升级",
    category: "汽车涂料",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80",
    desc: "通过引入元道叔碳酸缩水甘油酯改性丙烯酸树脂，显著提升了车漆的丰满度和耐酸雨性能。",
    result: ["光泽度提升 15%", "耐老化测试突破 3000小时"],
  },
  {
    id: 2,
    title: "沿海跨海大桥防腐涂装",
    category: "工业防腐",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80",
    desc: "针对高盐雾、高湿度的海洋环境，采用叔碳酸乙烯酯共聚乳液，为大桥混凝土结构提供长效防护。",
    result: ["耐盐雾性能提升 40%", "附着力维持 10年以上"],
  },
  {
    id: 3,
    title: "新能源电池湿法冶金萃取",
    category: "金属萃取",
    image:
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80",
    desc: "某锂电材料巨头采用我司高纯度叔碳酸作为镍钴萃取剂，大幅提高了金属分离效率和纯度。",
    result: ["萃取效率 >99.5%", "有机相损耗降低 20%"],
  },
];

export const NAV_LINKS = [
  { name: "首页", path: "/" },
  { name: "产品中心", path: "/products" },
  { name: "成功案例", path: "/cases" },
  { name: "关于元道", path: "/about" },
  { name: "联系我们", path: "/contact" },
];
