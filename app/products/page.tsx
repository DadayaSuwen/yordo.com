"use client";

import Image from "next/image"; // 引入 Next.js 图片组件
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import {
  Beaker,
  FlaskConical,
  ShieldCheck,
  Download,
  ArrowRight,
} from "lucide-react";

// --- 临时模拟数据（包含了真实有效的图片链接） ---
// 注意：实际项目中，你应该把这些 image 字段加到你的 @/app/data/constants 文件里
const DEMO_PRODUCTS = [
  {
    id: 1,
    name: "新癸酸乙烯酯 (W10)",
    // 修正：从 Neononanoate (C9) 改为 Neodecanoate (C10)
    enName: "Vinyl Neodecanoate (W10)",
    // 图片：蓝色实验室烧杯，代表化学合成
    image: "/image/unnamed.jpg",
    // 优化：强调单体改性和耐受性
    desc: "作为共聚单体，能显著提升聚合物乳液的耐水解性、耐擦洗性及耐候性。",
    features: ["极佳耐候性", "优异疏水性", "耐化学品腐蚀"],
    applications: ["环保乳胶漆", "外墙涂料", "防水涂层"],
    icon: "Beaker",
    code: "W10",
  },
  {
    id: 2,
    name: "新癸酸缩水甘油酯 (F10)",
    // 修正：从 Neononanoate 改为 Neodecanoate
    enName: "Glycidyl Neodecanoate (F10)",
    // 图片：微观结构/晶体，代表高分子材料
    image: "/image/unnamed (1).jpg",
    // 优化：强调其作为“活性稀释剂”的核心功能
    desc: "一种用于高性能环氧树脂的活性稀释剂，可有效降低粘度并提升漆膜的丰满度与柔韧性。",
    features: ["低粘度", "高反应活性", "优良的流平性"],
    applications: ["汽车修补漆", "工业地坪", "电子灌封胶"],
    icon: "FlaskConical",
    code: "F10",
  },
  {
    id: 3,
    name: "新癸酸 (A10)",
    // 修正：从 Neononanoic 改为 Neodecanoic
    enName: "Neodecanoic Acid (A10)",
    // 图片：工业表面/涂层，代表应用场景
    image: "/image/unnamed (2).jpg",
    // 优化：强调其作为中间体和金属盐合成的用途
    desc: "多功能的羧酸中间体，具有高位阻结构，广泛用于合成金属盐、附着力促进剂及过氧化物。",
    features: ["高化学稳定性", "优异的溶解性", "抗氧化性"],
    applications: ["轮胎橡胶粘合", "金属萃取", "涂料催干剂"],
    icon: "ShieldCheck",
    code: "A10",
  },
];

export default function ProductsPage() {
  useScrollReveal();

  return (
    <>
      {/* 顶部 Banner */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        {/* 这里假设你还没有 banner 图，暂时用个深色渐变代替，防止报错 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4 animate-fade-in-up">
            产品中心
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto animate-fade-in-up delay-100">
            涵盖叔碳酸、乙烯基酯及环氧单体，满足不同工业合成需求
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          {/* 使用带图片的 DEMO 数据 */}
          {DEMO_PRODUCTS.map((product, idx) => (
            <div
              key={product.id}
              className="group bg-white border border-slate-100 rounded-2xl p-0 shadow-sm hover:shadow-2xl transition-all duration-500 reveal-on-scroll flex flex-col md:flex-row overflow-hidden"
            >
              {/* --- 图片区域 (左侧 / 手机端顶部) --- */}
              <div className="md:w-1/3 relative min-h-[240px] md:min-h-full overflow-hidden">
                {/* 遮罩层：让图片稍微变暗，文字更清晰，hover时变亮 */}
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10 duration-500" />

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* 左上角标签 */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-md text-xs font-bold shadow-sm">
                    现货供应
                  </span>
                </div>
              </div>

              {/* --- 内容区域 (右侧) --- */}
              <div className="md:w-2/3 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-slate-500 font-mono text-sm uppercase tracking-wide">
                        {product.enName}
                      </p>
                    </div>
                    {/* 移动端不显示这个图标，保持简洁 */}
                    <div className="hidden md:block text-slate-200 group-hover:text-blue-100 transition-colors">
                      {/* 这里简单根据索引显示个背景图标装饰 */}
                      {idx === 0 && <Beaker size={48} />}
                      {idx === 1 && <FlaskConical size={48} />}
                      {idx === 2 && <ShieldCheck size={48} />}
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {product.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {/* 特性列表 */}
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                        核心特性
                      </span>
                      <ul className="space-y-2">
                        {product.features.map((f, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-slate-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 应用列表 */}
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                        主要应用
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((a, i) => (
                          <span
                            key={i}
                            className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded border border-slate-200 text-xs font-medium"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 底部按钮区 */}
                <div className="pt-6 border-t border-slate-50">
                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      产品文档下载
                    </span>
                  </div>

                  {/* 文档类型分组 */}
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    {/* DATA 文档 */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-slate-600 self-center pr-2">
                        DATA:
                      </span>
                      <a
                        href={`/pdf/${product.code} DATA(CN).pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 font-medium text-xs hover:bg-blue-100 transition-colors"
                      >
                        <Download size={14} />
                        中文版
                      </a>
                      <a
                        href={`/pdf/${product.code} DATA(EN).pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-slate-50 text-slate-700 font-medium text-xs hover:bg-slate-100 transition-colors"
                      >
                        <Download size={14} />
                        English
                      </a>
                    </div>

                    {/* TDS 文档 */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-slate-600 self-center pr-2">
                        TDS:
                      </span>
                      <a
                        href={`/pdf/${product.code} TDS(CN).pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 font-medium text-xs hover:bg-blue-100 transition-colors"
                      >
                        <Download size={14} />
                        中文版
                      </a>
                      <a
                        href={`/pdf/${product.code} TDS(EN).pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-slate-50 text-slate-700 font-medium text-xs hover:bg-slate-100 transition-colors"
                      >
                        <Download size={14} />
                        English
                      </a>
                    </div>

                    {/* MSDS 文档 */}
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-slate-600 self-center pr-2">
                        MSDS:
                      </span>
                      <a
                        href={`/pdf/${product.code} MSDS(CN).pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 font-medium text-xs hover:bg-blue-100 transition-colors"
                      >
                        <Download size={14} />
                        中文版
                      </a>
                      <a
                        href={`/pdf/${product.code} MSDS(EN).pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-slate-50 text-slate-700 font-medium text-xs hover:bg-slate-100 transition-colors"
                      >
                        <Download size={14} />
                        English
                      </a>
                    </div>
                  </div>

                  <button className="flex items-center gap-1 text-slate-400 hover:text-blue-600 text-sm font-medium transition-colors mt-4">
                    详情
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
