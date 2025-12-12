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
    id: "p1",
    slug: "tertiary-carboxylic-acid",
    name: "叔碳酸",
    enName: "Tertiary Carboxylic Acid",
    desc: "高纯度叔碳酸，具有优异的耐水解性和热稳定性，广泛用于涂料树脂合成、金属萃取及润滑油添加剂。",
    features: ["高纯度 >99%", "优异的化学稳定性", "低挥发性"],
    applications: ["汽车漆", "工业防腐涂料", "金属萃取剂"],
    icon: "Beaker",
    bgClass: "bg-blue-600",
  },
  {
    id: "p2",
    slug: "vinyl-neodecanoate",
    name: "新癸酸乙烯酯",
    enName: "Vinyl Neodecanoate",
    desc: "一种高度支链化的乙烯基单体，作为共聚单体可显著提升乳液聚合物的耐水性、耐候性和耐擦洗性。",
    features: ["极佳的疏水性", "优异的颜料润湿性", "抗紫外线"],
    applications: ["内外墙乳胶漆", "防水涂料", "木器漆"],
    icon: "FlaskConical",
    bgClass: "bg-indigo-600",
  },
  {
    id: "p3",
    slug: "glycidyl-ester",
    name: "叔碳酸缩水甘油酯",
    enName: "Glycidyl Ester",
    desc: "用于高性能丙烯酸树脂改性的关键环氧单体，赋予树脂卓越的外观、硬度和耐候性。",
    features: ["低粘度", "反应活性高", "耐候性极佳"],
    applications: ["高固体份汽车漆", "粉末涂料", "绝缘漆"],
    icon: "ShieldCheck",
    bgClass: "bg-cyan-600",
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
