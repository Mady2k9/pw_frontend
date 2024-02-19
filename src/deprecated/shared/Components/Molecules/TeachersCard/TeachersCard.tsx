import TeachersBg from '../../../../assets/Images/TeacherBg.png';
import Image from '../../Atoms/Image/Image';
import { getFullName } from '@/deprecated/shared/utility';

const TeachersCard = ({ teacher }: { teacher: any }) => {
  return (
    <div className="min-w-[220px] h-[305px] flex items-center justify-center ">
      <div
        style={{
          backgroundImage: `url(${TeachersBg.src})`,
        }}
        className=" bg-center bg-cover bg-no-repeat w-[185px] h-[290px] flex flex-col justify-end items-center  "
      >
        <Image
          bgImagetitle={`${teacher.imageId?.baseUrl + teacher.imageId?.key}`}
          className={'bg-center bg-cover bg-no-repeat w-[144px] h-[182px]'}
        />

        <div
          className="flex flex-col py-[12px] w-[206px] rounded-[6px] items-center justify-center bg-white"
          style={{ boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.08)' }}
        >
          <div className="sm:text-lg text-sm font-[700]">
            {getFullName(teacher)}
          </div>
          <div className="sm:text-sm text-xs font-[500]">{teacher.subject}</div>
          {
            teacher.experience && <div
              className="bg-[#EAECEF] text-[12px] leading-[18px] sm:text-sm rounded-[100px] py-[4px] mt-[9px] px-[18px]">
              {teacher.experience}+ Years Exp
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default TeachersCard;
