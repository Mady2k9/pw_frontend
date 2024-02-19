import React from 'react';
import Text from '../Atoms/Text/Text';

const DescriptionContent = ({ contentData }: { contentData: string }) => {
  return (
    <div
      className="mx-auto max-w-6xl w-full  xl:px-0  px-4 py-5 md:py-8"
      dangerouslySetInnerHTML={{
        __html: contentData,
      }}
    ></div>
    // <div className="mx-auto xl:max-w-6xl w-full  xl:px-0  px-4 py-5 md:py-8">
    //   <Text
    //     style={
    //       'font-bold text-[#1B2124] xl:text-[32px] xl:leading-[48px] text-[20px] leading-[30px] '
    //     }
    //     title={'Class 11 IIT JEE Courses'}
    //   />
    //   <div className="py-4 flex flex-col text-left gap-4">
    //     <div className=" flex flex-col gap-1.5">
    //       <Text
    //         style={'text-[#3d3d3d] md:text-lg text-sm font-bold'}
    //         title={'Best Online Course for IIT-JEE Class 11'}
    //       />
    //       <Text
    //         style={'text-[#757575] md:text-sm text-xs font-normal '}
    //         title={
    //           "The JEE Exam 2025 is one of the toughest exams in the country. Every year, hundreds of thousands of students prepare for the JEE Exam. The best time to begin JEE preparation is in 11th grade. For students in class 11, PW has come up with the best JEE Mains and Advanced courses. In these courses, students will learn from the country's best educators at an affordable price. The online courses for IIT JEE comprise live lectures and notes designed per the latest exam pattern of the IIT JEE examination."
    //         }
    //       />
    //     </div>

    //     <div className=" flex flex-col gap-1.5">
    //       <Text
    //         style={'text-[#3d3d3d] md:text-lg text-sm font-bold'}
    //         title={'Syllabus Covered'}
    //       />
    //       <Text
    //         style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //         title={
    //           'This course will cover the complete syllabus for JEE Exam for Class 11th (Physics, Chemistry, and Mathematics).'
    //         }
    //       />
    //     </div>
    //     <div className=" flex flex-col gap-1.5">
    //       <Text
    //         style={'text-[#3d3d3d] md:text-lg text-sm font-bold'}
    //         title={'Eligibility Criteria'}
    //       />
    //       <ul className="list-disc pl-7">
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'Class 11th students and students who have just passed the Class 10th exam and want to crack JEE exam are eligible to sit in this examination.'
    //             }
    //           />
    //         </li>
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'Category Rating- IIT JEE Class 11th: 4.82/5 (1,153,769).'
    //             }
    //           />
    //         </li>
    //       </ul>
    //     </div>
    //     <div className=" flex flex-col gap-1.5">
    //       <Text
    //         style={'text-[#3d3d3d] md:text-lg text-sm font-bold'}
    //         title={'Why Join Physics Wallah To Crack IIT JEE?'}
    //       />
    //       <ul className="list-disc pl-7">
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'PW launched 26 new YT channels in 2022, which helped us increase the total number of students on YouTube from 8.7 million to 22 million.'
    //             }
    //           />
    //         </li>
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'We have produced industry-best results, with 15000+ PWians qualifying in JEE, NEET, and NDA exams. 1 out of 5 students selected for JEE and 1 out of 6 chosen for both the NEET and NDA exams were PWians.'
    //             }
    //           />
    //         </li>
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'Our flagship programs, JEE and NEET, have continued to grow 2x. At the same time, Foundation and Defense Wallah have seen a surge of 3x in student enrollment.'
    //             }
    //           />
    //         </li>
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'PW is delivering magnificent results. Last year, one in every five students was chosen for the JEE exam, and one in every six was chosen for the NEET exam.'
    //             }
    //           />
    //         </li>
    //       </ul>
    //     </div>
    //     <div className=" flex flex-col gap-2">
    //       <Text
    //         style={'text-[#3d3d3d] md:text-lg text-sm font-bold'}
    //         title={'Most Engaging Batches for Class 11th IIT JEE'}
    //       />
    //     </div>
    //     <div className=" flex flex-col gap-2">
    //       <Text
    //         style={'text-[#3d3d3d] md:text-base text-sm font-[600]'}
    //         title={'Arjuna JEE 2023'}
    //       />
    //       <Text
    //         style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //         title={
    //           'This batch will cover the Class 11th syllabus (JEE Main and JEE Advanced). Students will get live classes, recorded video lectures, notes, and daily practice problems with video solutions. This batch will also provide a bridge (Basics of Class 11th) course. The syllabus of the Arjuna batch will be completed by Jan 2023.'
    //         }
    //       />
    //     </div>
    //     <div className=" flex flex-col gap-2">
    //       <Text
    //         style={'text-[#3d3d3d] md:text-base text-sm font-[600]'}
    //         title={'Arjuna JEE Fast Track Batch'}
    //       />
    //       <Text
    //         style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //         title={
    //           'Arjuna JEE Fast Track is a three-month course for Class 11th students preparing for JEE Mains and Advanced. This batch will cover the 11th grade (JEE Mains and Advanced) syllabus. With this course, students will get recorded video lectures, the best in doubt-solving faculty, notes, and DPP with video solutions.'
    //         }
    //       />
    //     </div>
    //     <div className=" flex flex-col gap-2">
    //       <Text
    //         style={'text-[#3d3d3d] md:text-base text-sm font-[600]'}
    //         title={'Course highlights'}
    //       />
    //       <Text
    //         style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //         title={
    //           'Students can enroll in batches designed for the IIT JEE full course or the IIT JEE crash course according to their requirements; the courses will provide you with the following:'
    //         }
    //       />
    //       <ul className="list-disc pl-7">
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'Class 11th (JEE Mains and Advance) syllabus for session 2023-24: Core subjects like physics, chemistry, and mathematics will be covered.'
    //             }
    //           />
    //         </li>
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'We have produced industry-best results, with 15000+ PWians qualifying in JEE, NEET, and NDA exams. 1 out of 5 students selected for JEE and 1 out of 6 chosen for both the NEET and NDA exams were PWians.'
    //             }
    //           />
    //         </li>
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'Our flagship programs, JEE and NEET, have continued to grow 2x. At the same time, Foundation and Defense Wallah have seen a surge of 3x in student enrollment.'
    //             }
    //           />
    //         </li>
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'PW is delivering magnificent results. Last year, one in every five students was chosen for the JEE exam, and one in every six was chosen for the NEET exam.'
    //             }
    //           />
    //         </li>
    //       </ul>
    //     </div>
    //     <div className=" flex flex-col gap-2">
    //       <Text
    //         style={'text-[#3d3d3d] md:text-base text-sm font-[600]'}
    //         title={'Benefits of the courses'}
    //       />
    //       <ul className="list-disc pl-7">
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'Class 11th (JEE Mains and Advance) syllabus for session 2023-24: Core subjects like physics, chemistry, and mathematics will be covered.'
    //             }
    //           />
    //         </li>
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'We have produced industry-best results, with 15000+ PWians qualifying in JEE, NEET, and NDA exams. 1 out of 5 students selected for JEE and 1 out of 6 chosen for both the NEET and NDA exams were PWians.'
    //             }
    //           />
    //         </li>
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'Our flagship programs, JEE and NEET, have continued to grow 2x. At the same time, Foundation and Defense Wallah have seen a surge of 3x in student enrollment.'
    //             }
    //           />
    //         </li>
    //         <li>
    //           <Text
    //             style={'text-[#757575] md:text-sm text-xs font-[500]'}
    //             title={
    //               'PW is delivering magnificent results. Last year, one in every five students was chosen for the JEE exam, and one in every six was chosen for the NEET exam.'
    //             }
    //           />
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DescriptionContent;
