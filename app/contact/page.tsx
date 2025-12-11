"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_DATA } from "@/app/data/constants";

export default function ContactPage() {
  return (
    <>

      {/* Hero Section */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/40"></div>
        {/* 可选：添加背景图 */}
        <div className="absolute inset-0 bg-[url('/yordo.png')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in-up">
            联系与合作
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto animate-fade-in-up delay-100">
            无论您是寻求样品、报价还是技术支持，我们随时为您服务
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-200" />
                  <div>
                    <div className="text-sm text-blue-200">销售热线</div>
                    <div className="text-xl font-bold">
                      {COMPANY_DATA.phone}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-200" />
                  <div>
                    <div className="text-sm text-blue-200">电子邮箱</div>
                    <div className="text-xl font-bold">
                      {COMPANY_DATA.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-200 mt-1" />
                  <div>
                    <div className="text-sm text-blue-200">工厂地址</div>
                    <div className="text-lg font-medium leading-snug">
                      {COMPANY_DATA.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="姓名"
                  className="w-full p-3 rounded bg-white border border-slate-200 focus:border-blue-500 outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="公司名称"
                  className="w-full p-3 rounded bg-white border border-slate-200 focus:border-blue-500 outline-none transition-colors"
                />
                <textarea
                  placeholder="咨询内容"
                  rows={4}
                  className="w-full p-3 rounded bg-white border border-slate-200 focus:border-blue-500 outline-none transition-colors"
                ></textarea>
                <button className="w-full bg-slate-900 text-white py-3 rounded font-bold hover:bg-slate-800 transition-colors">
                  发送留言
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}