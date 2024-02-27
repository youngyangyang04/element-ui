<template>
  <div class="el-table">
    <!-- 表头 -->
    <div class="el-table-header">
      <slot name="header"></slot>
    </div>

    <!-- 表体 -->
    <div class="el-table-body">
      <table>
        <thead>
          <tr>
            <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
          </tr>
        </thead>
        <tbody>
          <slot></slot>
        </tbody>
      </table>
    </div>

    <!-- 分页 -->
    <div class="el-table-pagination">
      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElTable',
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.el-table {
  width: 100%;
}

.el-table-header {
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
}

.el-table-body {
  margin-top: 8px;
  overflow-x: auto;
}

.el-table-body table {
  width: 100%;
  border-collapse: collapse;
}

.el-table-body th,
.el-table-body td {
  padding: 8px;
  border: 1px solid #ccc;
}

.el-table-pagination {
  margin-top: 8px;
}
</style>
