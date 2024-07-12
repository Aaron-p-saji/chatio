// pages/eula.js

import Head from "next/head";

const EULA = () => {
  return (
    <>
      <Head>
        <title>EULA - Chatio</title>
      </Head>
      <div className="h-screen  py-8 px-4 overflow-y-auto scrollbar scrollbar-thumb-[#555] scrollbar-thumb-rounded-full scrollbar-w-2">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg text-black">
          <h1 className="text-2xl font-bold mb-4">
            End-User License Agreement (EULA) for Chatio
          </h1>
          <p className="mb-4">
            This End-User License Agreement (EULA) is a legal agreement between
            you and [Your Name/Your Business Name]. This EULA governs your use
            of the Chatio software application (App) and the Chatio website
            (Website).
          </p>

          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By creating an account and using Chatio, you agree to be bound by
            the terms of this EULA. If you do not agree to these terms, do not
            use Chatio.
          </p>

          <h2 className="text-xl font-semibold mb-2">2. Account Creation</h2>
          <p className="mb-4">
            To use Chatio, you must create an account. You agree to provide
            accurate and complete information during the registration process.
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </p>

          <h2 className="text-xl font-semibold mb-2">3. Use of Chatio</h2>
          <p className="mb-4">
            Chatio allows you to make video/audio calls and chat with other
            users. You are permitted to send images and pictures in personal or
            group chats and upload photos and videos. You agree to use Chatio
            only for lawful purposes and in accordance with this EULA.
          </p>

          <h2 className="text-xl font-semibold mb-2">4. Prohibited Actions</h2>
          <span className="mb-4">
            You are prohibited from:
            <ul className="list-disc list-inside">
              <li>Misusing the App or Website.</li>
              <li>
                Reverse engineering or attempting to extract the source code of
                the App.
              </li>
              <li>
                Breaking the code or security measures of the App or Website.
              </li>
            </ul>
          </span>

          <h2 className="text-xl font-semibold mb-2">5. Data Privacy</h2>
          <p className="mb-4">
            We do not share your passwords or personal data with third parties.
            However, some data may be sent to third parties like Google to
            provide functionalities within Chatio. By using Chatio, you consent
            to this data sharing for functionality purposes.
          </p>

          <h2 className="text-xl font-semibold mb-2">6. User Content</h2>
          <p className="mb-4">
            You are solely responsible for any content you upload, send, or
            share through Chatio. You must ensure that you have the necessary
            rights to upload and share such content. Chatio reserves the right
            to remove any content that violates this EULA or applicable laws.
          </p>

          <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate your access to Chatio if you
            misuse the App, reverse engineer the App, or break the code.
            Termination may occur without prior notice.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            8. Support and Contact Information
          </h2>
          <p className="mb-4">
            For support and inquiries, you can contact us at{" "}
            <a
              href="mailto:aaronp.saji1233@gmail.com"
              className="text-blue-500"
            >
              aaronp.saji1233@gmail.com
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
          <p className="mb-4">
            This EULA is governed by and construed in accordance with the laws
            of India. Any disputes arising from or related to this EULA shall be
            subject to the exclusive jurisdiction of the courts in India.
          </p>

          <h2 className="text-xl font-semibold mb-2">
            10. Changes to this EULA
          </h2>
          <p className="mb-4">
            We reserve the right to modify this EULA at any time. We will notify
            you of any changes by updating the EULA on our Website and App. Your
            continued use of Chatio after any such changes constitutes your
            acceptance of the new EULA.
          </p>
        </div>
      </div>
    </>
  );
};

export default EULA;
