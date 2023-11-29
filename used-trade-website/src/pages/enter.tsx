import { useState } from "react";

export default function Enter() {
  const [method, setMethod] = useState<"Personal">("Personal");
  const onPersonalClick = () => setMethod("Personal");
  return (
    <div className="mt-16">
      <h3 className="text-3xl font-bold text-center">Enter to 베짱이마켓</h3>
      <div className="mt-8">
        <div className="flex flex-col items-center">
          <h5 className="text-sm text-gray-500 font-medium">Enter using:</h5>
          <div className="grid pb-4 border-b w-full mt-8 gap-16">
            <button className="pb-4 border-b-2 text-orange-400 font-medium" onClick={onPersonalClick}>개인정보 입력</button>
          </div>
        </div>
        <form className="flex flex-col mt-8">
            <label className="text-sm font-medium text-gray-700">
            이름
            </label>
            <div className="mt-1">
                <input type="name" className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"required />
            </div>

            <label className="text-sm font-medium text-gray-700">
            아이디
            </label>
            <div className="mt-1">
                <input type="user_id" className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"required />
            </div>

            <label className="text-sm font-medium text-gray-700">
            비밀번호
            </label>
            <div className="mt-1">
                <input type="password" className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"required />
            </div>

          <label className="text-sm font-medium text-gray-700">
            이메일 주소
          </label>
          <div className="mt-1">
            <input type="email" className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"required />
          </div>
          <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
            Get login link
          </button>
        </form>
      </div>
    </div>
  );
}