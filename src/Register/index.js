import Vue from 'vue'
import Crud from 'api/CRUD.js'
import Tool from 'base/tool.js'
import Constant from 'base/constant.js'

Vue.prototype['CrudApi'] = Crud
Vue.prototype['ToolApi'] = Tool
Vue.prototype['Constant'] = Constant
