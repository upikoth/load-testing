import http from 'k6/http';

export const options = {
	scenarios: {
		variable_rps: {
			executor: 'ramping-arrival-rate',
			startRate: 50,        // Начальный RPS
			timeUnit: '1s',
			stages: [
				{ target: 100, duration: '2m' }, // Увеличение до 100 RPS за 2 минуты
				{ target: 200, duration: '2m' }, // Увеличение до 200 RPS за следующие 2 минуты
				{ target: 0, duration: '1m' },   // Постепенное снижение до 0 RPS
			],
			preAllocatedVUs: 50,  // Количество VU для выполнения нагрузки
			maxVUs: 100,
		},
	},
};

export default function () {
	http.get('http://go-app:4444');
}
