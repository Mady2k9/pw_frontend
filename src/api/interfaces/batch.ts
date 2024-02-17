export interface IBatch {
    _id: string;
    batchCode: string;
    class: string;
    config: IBatchConfig;
    countryGroup: string;
    createdAt: string;
    description: string;
    endDate: string;
    byName?: string;
    exam: string[];
    faqCat: string;
    teacherData?: any;
    fee: IFee;
    isPathshala: boolean;
    isVidyapeeth: boolean;
    isVi: boolean;
    language: string;
    markedAsNew: boolean;
    meta: any[];
    name: string;
    oneLineDescription: string;
    orientationVideo: IOrientationVideo;
    previewImage: IImage;
    previewVideoType: string;
    programId: string;
    registrationEndDate: string;
    registrationStartDate: string;
    seoSlug: string;
    shortDescription: string;
    slug: string;
    startDate: string;
    status: string;
    subjects: ISubject[];
    freeContent?: any[];
    type: string;
    updatedAt: string;
    displayOrder: string;
    organizationId: string;
}

export interface IBatchConfig {
    isStartDateEnabled: boolean;
    isEndDateEnabled: boolean;
    isTeacherNameEnabled: boolean;
    isVidyapeeth: boolean;
    enableBatchReferAndEarn: boolean;
    referAndEarnExpireAt: string;
    isFormEnabled: boolean;
    isSubjective: boolean;
    isPremium: boolean;
    fbtPageTitle: string;
    isAddonVisible: boolean;
    addonsTitle: string;
    addonsDescription: string;
    classEndDate: string;
    enableNotes: boolean;
    enableDpp: boolean;
    enableDppPdfs: boolean;
    enableDppVideos: boolean;
    isAttendanceEnable: boolean;
    isCardEMIEnable: boolean;
    isSecondaryScreenEnabled: boolean;
    centerTypeIds: string[];
    offlineOfferingbatchTag: string;
    theme: string;
    isSPDEnabled: boolean;
}

export interface IFee {
    amount: number;
    tax: number;
    discount: number;
    total: number;
}

export interface IOrientationVideo {
    isIntroSectionEnabled: boolean;
    introSection: IIntroSection;
    _id: string;
}

export interface IIntroSection {
    customTitle: string;
    introVideoUrl: string;
    introVideoType: string;
    introVideoTitle: string;
    introVideoDescription: string;
    introVideoImageUrl: string;
    carouselTime: number;
    introVideos: IIntroVideo[];
    introImages: IIntroImage[];
}

export interface IIntroVideo {
    introVideoType: string;
    introVideoUrl: string;
    introVideoTitle: string;
    introVideoDescription: string;
    introVideoImageUrl: string;
}

export interface IIntroImage {
    introImageUrl: string;
}

export interface IImage {
    _id: string;
    baseUrl: string;
    key: string;
    name: string;
}

export interface ISubject {
    _id: string;
    subject: string;
    subjectId: string;
    description: string;
    slug: string;
    schedules: ISchedule[];
    teacherIds: ITeacherId[];
    imageId: IImage;
    tagCount: number;
    lectureCount: number;
    fileId?: IFile; // Optional since not all subjects might have a file associated
}

export interface ISchedule {
    _id: string;
    day: string;
    startTime: string;
    endTime: string;
    teacherId?: string; // Optional since not all schedules might have a teacherId associated
}

export interface ITeacherId {
    _id: string;
    firstName: string;
    lastName: string;
    imageId?: IImage; // Optional since not all teacherIds might have an image associated
    companyId?: string | null; // Optional and can be null
    subject?: string | null; // Optional and can be null
    experience: string;
    qualification?: string; // Optional since not all teacherIds might have a qualification associated
    featuredLine?: string; // Optional since not all teacherIds might have a featuredLine associated
}

export interface IFile {
    _id: string;
    baseUrl: string;
    key: string;
    name: string;
}
