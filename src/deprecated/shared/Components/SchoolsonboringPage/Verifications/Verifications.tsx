import React, { useEffect, useState } from 'react';
import SendImageStudy from '../../../../assets/Images/Schools/Study.gif';
import { updateCohort } from '@/deprecated/shared/Admitcard/api/updateCohort';
import { getProfileData } from '@/deprecated/shared/Admitcard/api/getProfileData';
import { updateRecentCohort } from '@/deprecated/shared/Admitcard/api/updateRecentCohort';
import { updateUsers } from '@/deprecated/shared/Admitcard/api/users';
import {Image} from '@/components/ui/image';


function Verifications() {
  const [newData, setNewData] = useState<any>('');
  useEffect(() => {
    const existingData = localStorage.getItem('clickedSubjects');
    startPrepCTA();
    if (existingData) {
      let newDataTemp: any = [];
      newDataTemp = JSON.parse(existingData);
      setNewData(newDataTemp);
    }
    console.log(existingData, 'newData');
  }, []);
  console.log(newData.batchSlug, 'newData1');
  const redirectToBatch = () => {
    if (newData) {
      const url = `${process.env.NEXT_PUBLIC_APP_BASE_URL}study/batches/${newData.batchSlug}/subjects/${newData.subjectSlug}/subject-topics`;
      window.open(url, '_parent');
    }
  };
  const startPrepCTA = async () => {
    const user: any = localStorage.getItem('user');
    const token: any = localStorage.getItem('TOKEN');
    const classSchools: any = localStorage.getItem(`UserCohortConfig`);
    if (!(user && token) || (user && !user?.profileId?.cohortId)) {
      const data = {
        exam: 'SCHOOL_CURRICULUM',
        class: newData.schoolclass,
      };
      const response = await updateCohort(data, token);
      if (response.success) {
        const usersApiData = await updateUsers(
          {
            exam: 'SCHOOL_CURRICULUM',
            class: newData.schoolclass,
          },
          token
        );
        const profileData = await getProfileData(token);
        if (profileData.success) {
          localStorage.setItem('user', JSON.stringify({ ...profileData.data }));

          localStorage.setItem(
            'COHORT_ID',
            profileData.data.profileId.cohortId
          );
          if (profileData.data.profileId.cohortId) {
            const recentCohort = await updateRecentCohort(
              {
                cohortId: profileData.data.profileId.cohortId || '',
              },
              token
            );
          }
        }
      }
    }
    redirectToBatch();
  };

  return (
    <div
      className="flex justify-center items-center h-full"
      // onClick={handleClick}
    >
      <Image
        src ={`${SendImageStudy.src}`}
        alt='gif image'
        className={`md:w-[370px] md:h-[275px] w-[200px] h-[160px] bg-bottom bg-cover bg-no-repeat my-[13px] `}
      />
    </div>
  );
}

export default Verifications;
