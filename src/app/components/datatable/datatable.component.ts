import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

export interface TreeNode<T> {
    data: T;
    children?: TreeNode<T>[];
    expanded?: boolean;
}

interface FSEntry {
    name: string;
    size: string;
    kind: string;
    items?: number;
}

@Component({
    selector: 'archer-datatable',
    templateUrl: 'datatable.component.html',
    styleUrls: ['./datatable.component.scss']
})

export class DatatableComponent implements OnInit, OnChanges {
    @Input() columns: string[];;
    @Input() datas: any[];
    @Input() columnCustom: any[];
    @Input() customRows : any[];
    @Output() onSelectRow = new EventEmitter();
    allColumns = [];

    dataSource: NbTreeGridDataSource<FSEntry>;

    sortColumn: string;
    sortDirection: NbSortDirection = NbSortDirection.NONE;
    constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {

    }

    private data: any[]

    onSelectRowItems = (value) => {
        this.onSelectRow.emit(value);
    }

    getShowOn(index: number) {
        const minWithForMultipleColumns = 400;
        const nextColumnStep = 100;
        return minWithForMultipleColumns + (nextColumnStep * index);
    }
    getSortDirection(column: string): NbSortDirection {
        if (this.sortColumn === column) {
            return this.sortDirection;
        }
        return NbSortDirection.NONE;
    }
    updateSort(sortRequest: NbSortRequest): void {
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
    }

    ngOnInit() {
        this.allColumns = [...this.columns,...this.columnCustom];
    }

    ngOnChanges(changes: SimpleChanges) {
        for (const key in changes) {
            if (Object.prototype.hasOwnProperty.call(changes, key)) {
                const element = changes[key].currentValue;
                if (key === 'datas') {
                    this.data = this.datas;
                    // console.log(this.data)
                    this.dataSource = this.dataSourceBuilder.create(this.datas);
                }

            }
        }
    }
}