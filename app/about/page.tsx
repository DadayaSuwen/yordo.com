"use client";

import { Calendar, Target, TrendingUp, Users, Award } from "lucide-react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { COMPANY_DATA, MILESTONES } from "@/app/data/constants";
import Image from "next/image";

export default function AboutPage() {
  useScrollReveal();

  return (
    <>
      {/* About Hero */}
      <div className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/yordo.png')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            关于元道化学
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in-up delay-100">
            致力于精细化工领域的持续创新，做全球值得信赖的合作伙伴
          </p>
        </div>
      </div>

      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          {/* 公司简介 */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-16 border border-slate-100 reveal-on-scroll">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  企业概况
                </h2>
                <div className="prose prose-lg text-slate-600 space-y-4">
                  <p>
                    {COMPANY_DATA.name}{" "}
                    成立于2015年，坐落于国家级化工园区——江西永修星火工业园。作为国内领先的叔碳酸及其衍生物制造商，我们通过自主研发打破了国际技术壁垒，为中国市场提供了高品质的本地化解决方案。
                  </p>
                  <p>
                    公司工厂占地面积63,833平方米，总投资数亿元。我们采用先进的DCS自动化控制系统，确保了生产过程的安全、稳定与环保，年综合产能已突破20万吨。
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <div className="text-3xl font-bold text-blue-600">2015</div>
                    <div className="text-slate-500 text-sm">成立年份</div>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <div className="text-3xl font-bold text-blue-600">
                      20+万吨
                    </div>
                    <div className="text-slate-500 text-sm">年综合产能</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
                <Image
                  src="/yordo.png"
                  alt="Company"
                  width={500}
                  blurDataURL={"/yordo.png"}
                  height={500}
                  className="mx-auto"
                  sizes="(max-width: 768px) 100vw, 500px"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          {/* 发展历程时间轴 */}
          <div className="mb-16 reveal-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">发展历程</h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="relative timeline-line max-w-4xl mx-auto">
              {MILESTONES.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center mb-12 md:mb-8 relative ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2 w-full p-4"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow flex items-center justify-center z-10 hidden md:flex">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  {/* 移动端的时间点标记 */}
                  <div className="absolute left-[12px] top-4 w-4 h-4 bg-blue-600 rounded-full border-2 border-white md:hidden"></div>

                  <div className="md:w-1/2 w-full p-4 pl-12 md:pl-4">
                    <div
                      className={`bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 hover:-translate-y-1 transition-transform ${
                        idx % 2 === 0 ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <span className="text-4xl font-bold text-blue-100 absolute top-4 right-4 z-0">
                        {item.year}
                      </span>
                      <div className="relative z-10">
                        <div className="text-blue-600 font-bold text-xl mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 企业文化 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 reveal-on-scroll">
            <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
              <Target className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">企业使命</h3>
              <p className="text-blue-100 text-sm">
                通过分子层面的创新，为人类创造更美好的绿色生活材料。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-slate-100">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2 text-slate-900">
                企业愿景
              </h3>
              <p className="text-slate-600 text-sm">
                成为全球精细化工领域受人尊敬的领军企业。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl text-center shadow-sm border border-slate-100">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2 text-slate-900">
                核心价值观
              </h3>
              <p className="text-slate-600 text-sm">
                诚信为本、技术驱动、品质至上、合作共赢。
              </p>
            </div>
          </div>

          {/* 荣誉资质简单展示 */}
          <div className="bg-white rounded-2xl p-10 text-center reveal-on-scroll border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              资质与认证
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                "ISO9001 质量管理体系",
                "ISO14001 环境管理体系",
                "高新技术企业证书",
                "安全生产标准化三级企业",
              ].map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 border border-slate-200 px-6 py-3 rounded-full text-slate-700 bg-slate-50"
                >
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
