<template>
  <div class="el-pagination">
    <button :disabled="currentPage === 1" @click="prevPage">Prev</button>
    <span>{{ currentPage }}</span>
    <button :disabled="currentPage === totalPages" @click="nextPage">Next</button>
  </div>
</template>

<script>
export default {
  name: 'ElPagination',
  props: {
    total: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('page-change', this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('page-change', this.currentPage + 1);
      }
    },
  },
};
</script>

<style scoped>
.el-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}

button {
  margin: 0 4px;
  padding: 4px 8px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  border: 1px solid #ccc;
  background-color: #fff;
}

button:disabled {
  cursor: not-allowed;
  color: #ccc;
}
</style>
