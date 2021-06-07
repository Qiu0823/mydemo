<template>
	<div class="bottom-charts">
		<div class="bc-chart-item">
			<div class="bcci-header">小车实际剩余电量</div>
			<dv-percent-pond :config="config"
				style="width:200px;height:100px;margin: auto; margin-top: 45px!important;" />
		</div>
		<dv-decoration-2 class="decoration-1" :reverse="true" style="width:5px;margin-top: 20px;" />

		<div class="bc-chart-item">
			<div class="bcci-header">小车电池温度</div>
			<dv-charts style="margin: auto; margin-top: -30px!important; width: 250px;height: 250px;"
				:option="option" />
		</div>

		<dv-decoration-2 class="decoration-2" :reverse="true" style="width:5px;margin-top: 20px;" />

		<div class="bc-chart-item">
			<div class="bcci-header">电机电流</div>
			<dv-charts style="margin: auto; margin-top: -30px!important; width: 250px;height: 250px;"
				:option="option3" />
		</div>

		<dv-decoration-2 class="decoration-3" :reverse="true" style="width:5px;margin-top: 20px;" />
		<div class="bc-chart-item">
			<div class="bcci-header">电机转速</div>
			<dv-charts style="margin: auto; margin-top: -30px!important; width: 250px;height: 250px;"
				:option="option2" />
		</div>
		<dv-decoration-2 class="decoration-3" :reverse="true" style="width:5px;margin-top: 20px;" />
		<div class="bc-chart-item">
			<div class="bcci-header">电机驱动器温度</div>
			<div style="width: 50%;float: left;">
				<vue-thermometer :value="35" :min="0" :max="100" :options="option6" />
			</div>
			<div style="width: 50%;float: left;">
				<vue-thermometer :value="67" :min="0" :max="100" :options="option6" />
			</div>
			<!-- 		  <dv-charts style="margin: auto; margin-top: -30px!important; width: 250px;height: 250px;" :option="option4" /> -->
		</div>
		<dv-decoration-2 class="decoration-3" :reverse="true" style="width:5px;margin-top: 20px;" />
		<div class="bc-chart-item">
			<div class="bcci-header">小车距离</div>
			<dv-charts style="margin: auto; margin-top: -30px!important; width: 250px;height: 250px;"
				:option="option5" />
		</div>

	</div>
</template>

<script>
	export default {
		name: 'BottomCharts',
		components: {},
		data() {
			return {
				config: {
					value: 66
				},

				option: {
					series: [{
						type: 'gauge',
						data: [{
							name: 'itemA',
							value: 55,
							gradient: ['#33FF00', '#FF4D00', '#FF0000']
						}],
						center: ['50%', '55%'],
						axisLabel: {
							formatter: '{value}°C',
							style: {
								fill: '#fff'
							}
						},
						axisTick: {
							style: {
								stroke: '#fff'
							}
						},
						details: {
							show: true,
							formatter: '温度{value}°C',
							position: 'start',
							offset: [10, 0],
							style: {
								fontSize: 13,
								textAlign: 'left',
								fill: '#fff'
							}
						},
						animationCurve: 'easeInOutBack'
					}]
				},
				option1: {
					series: [{
						type: 'gauge',
						data: [{
							name: 'itemA',
							value: 1000,
							gradient: ['#33FF00', '#e690d1', '#fb7293']
						}],
						center: ['50%', '55%'],
						axisLabel: {
							formatter: '{value}/转',
							style: {
								fill: '#fff'
							}
						},
						axisTick: {
							style: {
								stroke: '#fff'
							}
						},
						details: {
							show: true,
							formatter: '转速{value}/转',
							position: 'start',
							offset: [10, 0],
							style: {
								fontSize: 13,
								textAlign: 'left',
								fill: '#fff'
							}
						},
						animationCurve: 'easeInOutBack',
						max: 2000
					}]
				},

				option2: {
					series: [{
						type: 'gauge',
						data: [{
								name: '1#电机',
								value: 1234,
								radius: '80%'
							},
							{
								name: '2#电机',
								value: 467,
								radius: '60%'
							}
						],
						axisLabel: {
							formatter: '{value}',
							style: {
								fill: '#fff'
							}
						},
						axisTick: {
							style: {
								stroke: '#fff'
							}
						},
						pointer: {
							valueIndex: 1,
							style: {
								scale: [.6, .6]
							}
						},
						details: {
							show: true,
							formatter: '{name}{value}转',
							position: 'start',
							offset: [10, 0],
							style: {
								fontSize: 13,
								textAlign: 'left'
							}
						},
						min: 160,
						max: 2000
					}]
				},
				option3: {
					series: [{
						type: 'gauge',
						data: [{
								name: '1#电机',
								value: 32,
								radius: '80%'
							},
							{
								name: '2#电机',
								value: 12,
								radius: '60%'
							}
						],
						axisLabel: {
							formatter: '{value}A',
							style: {
								fill: '#fff'
							}
						},
						axisTick: {
							style: {
								stroke: '#fff'
							}
						},
						pointer: {
							valueIndex: 1,
							style: {
								scale: [.6, .6]
							}
						},
						details: {
							show: true,
							formatter: '{name}{value}A',
							position: 'start',
							offset: [10, 0],
							style: {
								fontSize: 13,
								textAlign: 'left'
							}
						},
						min: 0,
						max: 90
					}]
				},
				option4: {
					series: [{
						type: 'gauge',
						data: [{
								name: '1#电机',
								value: 32,
								radius: '80%'
							},
							{
								name: '2#电机',
								value: 12,
								radius: '60%'
							}
						],
						axisLabel: {
							formatter: '{value}度',
							style: {
								fill: '#fff'
							}
						},
						axisTick: {
							style: {
								stroke: '#fff'
							}
						},
						pointer: {
							valueIndex: 1,
							style: {
								scale: [.6, .6]
							}
						},
						details: {
							show: true,
							formatter: '{name}{value}度',
							position: 'start',
							offset: [10, 0],
							style: {
								fontSize: 13,
								textAlign: 'left'
							}
						},
						min: 0,
						max: 90
					}]
				},
				option5: {
					series: [{
						type: 'gauge',
						data: [{
								name: '小车目标距离',
								value: 66666,
								radius: '80%'
							},
							{
								name: '小车实际距离',
								value: 7777,
								radius: '60%'
							}
						],
						axisLabel: {
							formatter: '{value}mm',
							style: {
								fill: '#fff'
							}
						},
						axisTick: {
							style: {
								stroke: '#fff'
							}
						},
						pointer: {
							valueIndex: 1,
							style: {
								scale: [.6, .6]
							}
						},
						details: {
							show: true,
							formatter: '{name}{value}mm',
							position: 'start',
							offset: [10, 0],
							style: {
								fontSize: 13,
								textAlign: 'left'
							}
						},
						min: 0,
						max: 999999
					}]
				},

				config3: {
					data: [{
							name: '收费站',
							value: 452
						},
						{
							name: '监控中心',
							value: 512
						},
						{
							name: '道路外场',
							value: 333
						},
						{
							name: '其他',
							value: 255
						}
					],
					color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
					radius: '65%',
					activeRadius: '70%'
				},

				config4: {
					data: [{
							name: '收费站',
							value: 156
						},
						{
							name: '监控中心',
							value: 415
						},
						{
							name: '道路外场',
							value: 90
						},
						{
							name: '其他',
							value: 210
						}
					],
					color: ['#00baff', '#3de7c9', '#fff', '#ffc530', '#469f4b'],
					radius: '65%',
					activeRadius: '70%'
				},

				labelConfig: {
					data: ['收费站', '监控中心', '道路外场', '其他']
				},

				option6: {
					text: {
						color: 'white',
						fontSize: 8,
						textAdjustmentY: 2,
						fontFamily: 'Arial',
						textEnabled: true
					},
					thermo: {
						color: '#FF0000',
						backgroundColor: '#fcf9f9',
						frameColor: 'white',
						ticks: 5,
						ticksEnabled: true,
						tickColor: 'white',
						tickWidth: '1'
					},
					layout: {
						height: 180,
						width: 100
					}
				}
			}
		}
	}
</script>

<style lang="less">
	.bottom-charts {
		width: 100%;
		height: 100%;
		display: flex;
		position: relative;

		.bc-chart-item {
			width: 25%;
			height: 100%;
			padding-top: 20px;
			box-sizing: border-box;
		}

		.bcci-header {
			height: 30px;
			text-align: center;
			line-height: 30px;
			font-size: 20px;
		}

		.dv-active-ring-chart {
			height: calc(~"100% - 80px");
		}

		.label-tag {
			height: 30px;
		}

		.active-ring-name {
			font-size: 18px !important;
		}

		.decoration-1,
		.decoration-2,
		.decoration-3 {
			display: absolute;
			left: 0%;
		}
	}
</style>
