import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <div className="mb-8">
          <Link to="/login" className="text-sm text-cyan-600 hover:underline">← ログインに戻る</Link>
        </div>

        <h1 className="text-2xl font-bold text-slate-800 mb-2">利用規約</h1>
        <p className="text-slate-400 text-sm mb-8">最終更新日：2026年3月22日</p>

        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="font-semibold text-slate-700 mb-2">第1条（サービスの概要）</h2>
            <p>coral-reef-keeper（以下「本サービス」）は、海水水槽の水質管理・機材管理・サンゴ購入を支援するウェブアプリケーションです。</p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-700 mb-2">第2条（利用登録）</h2>
            <p>本サービスはGoogleアカウントによる認証を使用します。ログインにより、本規約に同意したものとみなします。</p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-700 mb-2">第3条（データの取り扱い）</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>水槽データ・水質記録・注文情報はFirebaseに安全に保存されます。</li>
              <li>各ユーザーは自分のデータのみ閲覧・編集できます。</li>
              <li>取得した個人情報（氏名・メールアドレス・住所・電話番号）は注文処理の目的のみに使用します。</li>
              <li>第三者への提供は法令に基づく場合を除き行いません。</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-slate-700 mb-2">第4条（商品の購入）</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>商品の注文確定後は、原則としてキャンセル・変更はできません。</li>
              <li>生体（サンゴ・魚）は輸送中の死亡・状態変化について、天災・輸送会社の過失による場合を除き責任を負いかねます。</li>
              <li>価格・在庫状況は予告なく変更される場合があります。</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-slate-700 mb-2">第5条（禁止事項）</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>他のユーザーへの不正アクセスや妨害行為</li>
              <li>虚偽情報の登録</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>法令または公序良俗に反する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-slate-700 mb-2">第6条（免責事項）</h2>
            <p>本サービスの利用により生じた損害について、当方の故意または重大な過失による場合を除き、責任を負いません。</p>
          </section>

          <section>
            <h2 className="font-semibold text-slate-700 mb-2">第7条（規約の変更）</h2>
            <p>本規約は予告なく変更する場合があります。変更後も本サービスを継続利用した場合、変更後の規約に同意したものとみなします。</p>
          </section>
        </div>
      </div>
    </div>
  );
}
