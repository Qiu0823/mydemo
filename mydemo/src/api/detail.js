import axios from 'axios'

const request =  axios.create({
  //baseURL: 'http://192.168.1.232:9001' // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  baseURL: _LOGIN_URL
})

export function pending(data){
	return request({
		url:'/fault/query/pending',
		method: 'get',
		params:data
	})
}

export function handled(data){
	return request({
		url:'/fault/query/handled',
		method:'get',
		params:data
	})
}

export function frm(data){
	return request({
		url:'/fault/query/frm',
		method:'get',
		params:data
	})
}