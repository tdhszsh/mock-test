import axios from '../api/axios.js';

export const getCJLB = () => {
	return axios.get(`https://dolphin-dev.kedacom.com/pacc/dictDetail/findDictDetailMultiple?codePara=XZ_CJLB`, {}, (res) => {
        console.log('33查看res', res);
    });
};