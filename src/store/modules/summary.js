import {
  reqSummaryMonthAnalysisData,
  reqSummaryClassifyStatisticData,
  reqSummaryCountsData,
  reqSummarySourceData,
  reqSummaryNaturalPersonAnalysisData,
  reqSummaryNewestFillInDeptData,
} from '../../api'
import {
  SummaryMonthAnalysis,
  SummaryClassifyStatistic,
  SummaryCounts,
  SummarySource,
  SummaryNaturalPersonAnalysis,
  SummaryNewestFillInDept,
} from '../mutation-types'

export default {
  state: {
    monthAnalysis: {
      collection: 0,
      appear: 0,
      reflux: 0
    },
    classifyStatistic: {
      lv1: 0,
      lv2: 0,
      resourceCount: 0,
      deptCount: 0,
      chartData: [
        ['product', '信息量'],
        ['基础信息', 80],
        ['业务信息', 100],
        ['司法信息', 20],
        ['行政执法信息', 300],
        ['公共事业信息', 400],
        ['信用评级信息', 500],
        ['其他信息', 600],
        ['累计', 700]
      ],
      deptList: [
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 }
      ]
    },
    summaryCounts: {
      resource: 0,
      collection: 0,
      month: 0,
      naturalPerson: 0,
      legalPerson: 0,
      focusPerson: 0,
      passPercent: 80,
      chartList: [
        ['product','奖','惩'],
        ['1月',1000,500],
        ['2月',1400,600],
        ['3月',2000,700],
        ['4月',1500,500],
        ['5月',1200,400],
        ['6月',1300,500],
        ['7月',1400,600],
        ['8月',2000,500],
        ['9月',2200,300],
        ['10月',1600,500],
        ['11月',1700,600],
        ['12月',1400,400],
      ]
    }, // 中心数据
    source:[
      ['product','数据来源'],
      ['手工填报',10],
      ['et对接',5],
      ['内部接口',15],
      ['其他',25]
    ], // 来源
    naturalPersonAnalysis: [
      {
        outer: [
          { value: 335, name: '业务信息' },
          { value: 310, name: '司法信息' },
          { value: 234, name: '行政执法信息' },
          { value: 235, name: '信用评价信息' },
          { value: 248, name: '公共事业信息' },
          { value: 248, name: '其他信息' },
          { value: 248, name: '基本信息' }
        ],
        inner: [
          { value: 535, name: '直接访问' }
        ]
      },
      {
        outer: [
          { value: 365, name: '业务信息' },
          { value: 340, name: '司法信息' },
          { value: 264, name: '行政执法信息' },
          { value: 225, name: '信用评价信息' },
          { value: 218, name: '公共事业信息' },
          { value: 228, name: '其他信息' },
          { value: 218, name: '基本信息' }
        ],
        inner: [
          { value: 635, name: '直接访问' }
        ]
      }
    ],
    newestFillInDept: [
      { name: '部门名称一', count: 8848, percent: 10 },
      { name: '部门名称一', count: 8848, percent: 10 },
      { name: '部门名称一', count: 8848, percent: 10 },
      { name: '部门名称一', count: 8848, percent: 10 },
      { name: '部门名称一', count: 8848, percent: 10 }
    ] // 最新填报部门
  },
  mutations: {},
  actions: {
    // 交互
    /*async getOverviewDataExchange({ commit }, params) {
      const result = await reqOverviewDataExchange(params)
      commit(OverviewDataExchange, { result })
    },*/
    // 初始
    async getSummaryMonthAnalysisData({ commit }) {
      const result = await reqSummaryMonthAnalysisData()
      commit(SummaryMonthAnalysis, { result })
    },
    async getSummaryClassifyStatisticData({ commit }) {
      const result = await reqSummaryClassifyStatisticData()
      commit(SummaryClassifyStatistic, { result })
    },
    async getSummaryCountsData({ commit }) {
      const result = await reqSummaryCountsData()
      commit(SummaryCounts, { result })
    },
    async getSummarySourceData({ commit }) {
      const result = await reqSummarySourceData()
      commit(SummarySource, { result })
    },
    async getSummaryNaturalPersonAnalysisData({ commit }) {
      const result = await reqSummaryNaturalPersonAnalysisData()
      commit(SummaryNaturalPersonAnalysis, { result })
    },
    async getSummaryNewestFillInDeptData({ commit }) {
      const result = await reqSummaryNewestFillInDeptData()
      commit(SummaryNewestFillInDept, { result })
    },
  }
}
