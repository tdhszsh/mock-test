import axios2 from '../api/axios2.js';

export const getCJLB2 = () => {
	return axios2.get(`https://dolphin-dev.kedacom.com/pacc/dictDetail/findDictDetailMultiple?codePara=XZ_CJLB`);
};