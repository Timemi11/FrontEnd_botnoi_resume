import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="contianer container mx-auto px-4  py-2">
      <div className="row1 w-2/5 pr-20">
        <div className="img ml-10 py-11 px-10 ">
          <img src="src\assets\proflie.jpg" alt="profile" />
          <h2 className="pt-4 text-3xl font-bold">
            ชัชวาล อารมทิพย์ <span className="text-xl">(ทาม)</span>
          </h2>
          <h3 className=" uppercase pb-4 text-xl font-light italic">
            Full Stack Developer
          </h3>
        </div>
        <div className="info ">
          <h1 className="topic text-2xl font-bold text-center py-1">
            ข้อมูลส่วนตัว
          </h1>
          <ul className="px-12 py-6">
            <li className="py-1">
              ชื่อ-สกุล: <span className="ml-5">ชัชวาล อารมทิพย์</span>
            </li>
            <li className="py-1">
              ชื่อเล่น: <span className="ml-7">ทาม</span>
            </li>
            <li className="py-1">
              วันเกิด: <span className="ml-6"> 9 มิถุนายน 2002</span>
            </li>
            <li className="py-1">
              สัญชาติ: <span className="ml-3">ไทย</span>
            </li>
            <li className="py-1">
              อายุ: <span className="ml-10">21</span>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h1 className="text-2xl font-bold text-center py-1">ข้อมูลติดต่อ</h1>
          <ul className="p-9">
            <li className="flex items-start mb-5">
              <img
                width="32px"
                height="32px"
                className="object-contain mr-6 mt-2"
                src="src\assets\icon\pin.png"
                alt="pin"
              />
              <p>
                121/4 ซอย 3 หมู่บ้านสวนตะไคร้ ตำบลสนามจันทร์ อำเภอเมืองนครปฐม
                จังหวัดนครปฐม 73000
              </p>
            </li>
            <li className="flex items-start mb-5">
              <img
                width="22px"
                height="20px"
                className="object-contain ml-2 mr-6 "
                src="src\assets\icon\call.png"
                alt="pin"
              />
              <p>+66 6 4026 7154</p>
            </li>
            <li className="flex items-start mb-5">
              <img
                width="22px"
                height="20px"
                className="object-contain ml-2 mr-6 "
                src="src\assets\icon\github.png"
                alt="pin"
              />
              <a
                className="underline underline-offset-1 text-blue-500"
                href="https://github.com/Timemi11">
                https://github.com/Timemi11
              </a>
            </li>
            <li className="flex items-start mb-5">
              <img
                width="22px"
                height="20px"
                className="object-contain ml-2 mr-6 "
                src="src\assets\icon\email.png"
                alt="pin"
              />
              <a
                className="underline underline-offset-1 text-blue-500"
                href="mailto:aromtip_c@silpakorn.edu">
                aromtip_c@silpakorn.edu
              </a>
            </li>
            <li className="flex items-start mb-5">
              <img
                width="22px"
                height="20px"
                className="object-contain ml-2 mr-6 "
                src="src\assets\icon\facebook.png"
                alt="pin"
              />
              <a
                className="underline underline-offset-1 text-blue-500"
                href="https://www.facebook.com/timemi12/">
                Chatchawan Aromtip
              </a>
            </li>
          </ul>
        </div>
        <div className="skill">
          <h1 className="text-2xl font-bold text-center py-1">
            ทักษะและเครื่องมือ
          </h1>
          <div className="topic1 px-10 my-5">
            <h2>Programing Language</h2>
            <ul className="font-thin list-disc ml-7">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JAVASCRIPT</li>
              <li>SQL</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="topic2 px-10 my-5">
            <h2>Library & Framework</h2>
            <ul className="font-thin list-disc ml-7">
              <li>React</li>
              <li>Boostrap</li>
            </ul>
          </div>
          <div className="topic3 px-10 my-5">
            <h2>Database</h2>
            <ul className="font-thin list-disc ml-7">
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row2 w-3/5 py-14">
        <div className="objective">
          <h1 className="text-2xl font-bold flex text-center py-2 ml-16">
            <img
              width="32px"
              height="32px"
              className="object-contain mr-4 ml-4 "
              src="src\assets\icon\icons8-user-96.png"
              alt="person"
            />
            <p>จุดมุ่งหมายการทำงาน</p>
          </h1>
          <p className="indent-16 px-16 mt-6 ml-4">
            เพื่อพัฒนาความสามารถที่มีอยู่ให้มากกว่าเดิม
            รวมถึงโอกาสที่จะได้เรียนรู้สิ่งใหม่ๆจากการไปทำสหกิจศึกษา
          </p>
          <p className="indent-16 px-20 mb-6 ">
            สวัสดีครับ ผมชื่อ ชัชวาล อารมทิพย์ ชื่อเล่น ทาม ปัจจุบันเป็นนักศึกษา
            ชั้นปีที่ 3 สาขาวิทยาการคอมพิวเตอร์อยู่ที่มหาวิทยาลัยศิลปากร
            ต้องการหาที่ฝึกสหกิจศึกษาเพื่อพัฒนาทักษะด้านการเขียนโปรแกรม
            ปัจจุบันมีความสนใจในการเขียนfront-end และ back-end เพราะสามารถ สร้าง
            ปรับแต่ง โปรแกรมหรือเว็บไซต์ได้ตามความต้องการ
            นอกจากนี้ผมยังอยากเรียนรู้ในสิ่งใหม่ๆทั้งวิธีการคิดในการทำงาน
            หรือเครื่องมือเทคโนโลยีที่ไม่เคยใช้งานหรือรู้จักมาก่อนครับ
          </p>
        </div>
        <div className="education">
          <h1 className="text-2xl font-bold flex text-center py-2 ml-16 ">
            <img
              width="32px"
              height="32px"
              className="object-contain mr-4 ml-4 "
              src="src\assets\icon\icons8-graduation-90.png"
              alt="person"
            />
            <p>ประวัติการศึกษา</p>
          </h1>
          <div className="timeline px-16 my-5">
            <h3 className="text-2xl">
              2021 - ปัจจุบัน (คาดว่าจะสำเร็จการศึกษาในปี 2025)
            </h3>
            <div className="arrow">
              <div className="pin"></div>
              <div className="line"></div>
              <div className="pin"></div>
            </div>
            <div className="ml-8">
              <h4 className="text-xl">มหาวิทยาลัยศิลปากร</h4>
              <p className="text-zinc-500">
                ระดับปริญญาตรี วิทยาศาสตร์บัณฑิต (วท.บ.) วิทยาการคอมพิวเตอร์{" "}
              </p>
              <p className="text-zinc-500"> (GPA 3.08)</p>
            </div>
          </div>
          <div className="timeline px-16 my-5">
            <h3 className="text-2xl">2018 - 2021</h3>
            <div className="arrow">
              <div className="pin"></div>
              <div className="line"></div>
              <div className="pin"></div>
            </div>
            <div className="ml-8">
              <h4 className="text-xl">โรงเรียนวัดสุทธิวราราม</h4>
              <p className="text-zinc-500">หลักสูตรวิทย์-คณิต</p>
              <p className="text-zinc-500">(GPA 3.54)</p>
            </div>
          </div>
        </div>
        <div className="experience">
          <h1 className="text-2xl font-bold flex text-center py-2 px-9 ml-16">
            ประสบการณ์และกิจกรรมอื่นๆ
          </h1>
          <div className="arrow2">
            <div className="pin2"></div>
            <div className="line2"></div>
            <div className="pin2"></div>
          </div>
          <div className="month px-16 mt-12 ml-8">
            <h3 className="text-2xl ">กุมภาพันธ์ 2024</h3>
            <ul className="list-disc ml-9 text-zinc-500 text-lg">
              <li>เข้าร่วม CPSU-COOP-Knowledge Sharing React & Vite</li>
              <li>เข้าร่วม CPSU-COOP-Knowledge Sharing Agile & xcode </li>
            </ul>
          </div>
          <div className="month px-16 mt-8 ml-8">
            <h3 className="text-2xl ">มิถุนายน 2023</h3>
            <ul className="list-disc ml-9 text-zinc-500 text-lg">
              <li>
                สร้าง Age Calculator App โดยเขียนโครงสร้างด้วย HTML5 ตกแต่งด้วย
                SASS จากนั่นก็เขียนฟังก์ชั้่นคำนวณต่างๆผ่าน JAVASCRIPT
              </li>
              <li>สร้างมินิโปรเจคลงใน GITHUB </li>
            </ul>
          </div>
          <div className="arrow2">
            <div className="pin2"></div>
            <div className="line2"></div>
            <div className="pin2"></div>
          </div>
          <div className="month px-16 mt-8 ml-8">
            <h3 className="text-2xl ">พฤกษภาคม 2023</h3>
            <ul className="list-disc ml-9 text-zinc-500 text-lg">
              <li>สร้าง Landing page โดยใช้ HTML5 SASS CSS3 JAVASCRIPT </li>
            </ul>
          </div>
          <div className="month px-16 mt-8 ml-8">
            <h3 className="text-2xl ">มิถุนายน 2022 - กุมภาพันธ์ 2023</h3>
            <ul className="list-disc ml-9 text-zinc-500 text-lg">
              <li>
                มีความสนใจในการเขียนเว็บไซต์ด้วย HTML5 CSS3 JAVASCRIPT
                จึงเข้าหาความรู้จาก Youtube และแหล่งข้อมูลอื่นๆ เช่น
                StackOverflow, W3Schools
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
