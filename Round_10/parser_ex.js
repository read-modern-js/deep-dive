async function Get_graduation_info(userid, passwd)
{
    let formdata = new FormData();
    return await fetch(url,{
        method: 'POST',
        headers:{
            Accept:"application/json",
        },
        body:formdata
    })
	.then(async response=>{
		const statusCode = response.status;
		let data = ""
		if(statusCode === 200 || statusCode === 201)
		{
			data = response.json()
		}
		const response_1 = await Promise.all([statusCode, data]); //2개의 비동기 처리를 모두 병렬 처리.
		// await 키워드는 반드시 프로미스 앞에 사용해야 한다.
        return ({
			statusCode: response_1[0],
			json: response_1[1]
		});
	})
}


// async/await는 프로미스를 기반으로 작동한다.
// async/await를 사용하면 프로미스의 후속 처리 메서드 없이 마치 동기 처리처럼 프로미스가 처리 결과를 반환 하도록 구현할 수 있다.
// await 키워드는 반드시 async 함수 내부에서 사용해야 한다.
export default Get_graduation_info;