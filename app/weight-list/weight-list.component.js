(function () {
    'use strict';
    var WeightListController = (function () {
        function WeightListController(moment, numberFilter, $timeout, toaster, $uibModal, WeightsResource) {
            this.alert = { message: 'Nenhum registro cadastrado. Clique em "Incluir".' };
            this.flotData = [{ label: 'Peso', data: [] }];
            this.flotOptions = {
                xaxis: {
                    // dayNames: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                    minTickSize: [1, "hour"],
                    mode: "time",
                    monthNames: [
                        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
                    ]
                },
                colors: ["#1ab394"],
                grid: {
                    color: "#999999",
                    hoverable: true,
                    clickable: true,
                    tickColor: "#D4D4D4",
                    borderWidth: 0
                },
                tooltip: true,
                tooltipOpts: {
                    content: function (label, xval, yval) {
                        var content = "%s em " + moment(xval).utcOffset(0).format('DD/MM/YYYY HH:mm') + ' = ' + numberFilter(yval);
                        return content;
                    },
                    xDateFormat: "%y-%0m-%0d",
                    onHover: function (flotItem, $tooltipEl) { }
                }
            };
            this.pagination = { currentPage: 1 };
            this.showMode = { chart: true, table: true };
            this.$timeout = $timeout;
            this.toaster = toaster;
            this.$uibModal = $uibModal;
            this.weightId = null;
            this.weights = [''];
            this.WeightsResource = WeightsResource;
            this.query();
        }
        WeightListController.prototype.getChart = function () {
            var qtde = this.weights.length;
            var flotChart = [];
            for (var i = qtde - 1; i >= 0; i--) {
                flotChart.push([
                    moment(this.weights[i].date).utcOffset(0).valueOf(),
                    this.weights[i].value
                ]);
            }
            this.flotData[0].data = flotChart;
        };
        WeightListController.prototype.openModal = function (weightGrid) {
            var modalInstance = this.$uibModal.open({
                animation: true,
                controller: 'WeightModalController',
                controllerAs: 'vm',
                resolve: {
                    weight: weightGrid
                },
                templateUrl: 'weightModal.html',
                windowClass: 'center-modal'
            });
            modalInstance.result.then(function (weight) {
                this.query();
                this.weightId = weight.id;
                this.$timeout(function () {
                    this.weightId = null;
                }, 5000);
            });
        };
        WeightListController.prototype.query = function () {
            var _this = this;
            this.WeightsResource.query({ page: this.pagination.currentPage }, function (response) {
                _this.weights = response.weights;
                _this.pagination = response.meta;
                _this.getChart();
            });
        };
        WeightListController.prototype.remove = function (weight) {
            this.WeightsResource.delete({ id: weight.id }, function (response) {
                this.toaster.pop('success', '', response.message);
                this.query();
            });
        };
        return WeightListController;
    }());
    WeightListController.$inject = ['moment', 'numberFilter', '$timeout', 'toaster', '$uibModal', 'WeightsResource'];
    angular
        .module('app.weights')
        .component('weightList', {
        controller: WeightListController,
        templateUrl: 'app/weight-list/weight-list.template.html'
    });
})();
//# sourceMappingURL=weight-list.component.js.map