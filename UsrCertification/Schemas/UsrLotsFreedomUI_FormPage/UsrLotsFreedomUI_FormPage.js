define("UsrLotsFreedomUI_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrLotsFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "1cd31de1-cabf-4a98-9d72-de818544022b",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrLotsType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrLotsType_j0w3ba7",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrLotsType_j0w3ba7",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_054jha0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_054jha0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrLotsType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrLotsPublicationDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_UsrLotsPublicationDate_9erjxdl",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"control": "$PDS_UsrLotsPublicationDate_9erjxdl",
					"pickerType": "datetime"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrLotsRealty",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrLotsRealty_b8uyngl",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrLotsRealty_b8uyngl",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_luecigk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_luecigk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrLotsRealty",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLotsTypeUsrCommissionPercent_zuxu53p",
					"control": "$PDS_UsrLotsTypeUsrCommissionPercent_zuxu53p",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrLotsOwner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrLotsOwner_lhfxhjm",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrLotsOwner_lhfxhjm",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_16b3w3a",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceStringhe(addRecord_16b3w3a_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrLotsOwner",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrLotsRealtor",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrLotsRealtor_1o4gawr",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrLotsRealtor_1o4gawr",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_fn9dye2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fn9dye2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrLotsRealtor",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrLotsCost",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLotsCost_jy4lsb4",
					"control": "$PDS_UsrLotsCost_jy4lsb4",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrLotsStatus",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrLotsStatus_oqhs3qp",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrLotsStatus_oqhs3qp",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_la3xkr0",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_la3xkr0_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrLotsStatus",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrLotsRealtorsCommission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLotsRealtorsCommission_yak26ra",
					"control": "$PDS_UsrLotsRealtorsCommission_yak26ra",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrLotsCurrency",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrLotsCurrency_x99y0tn",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrLotsCurrency_x99y0tn",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_g9egkvy",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_g9egkvy_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrLotsCurrency",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_hke6y0b",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_hke6y0b_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_wjxg51j",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_hke6y0b",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_yaxdaed",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_wjxg51j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_fld4wxw",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_fld4wxw_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrLotsVisitFreedomUI",
							"defaultValues": [
								{
									"attributeName": "UsrParentLots",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_yaxdaed",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_urogam9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_urogam9_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_y6dud8bDS"
						}
					}
				},
				"parentName": "FlexContainer_yaxdaed",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_g2y45br",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_g2y45br_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_yaxdaed",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_d3dla2l",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_d3dla2l_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "LotsVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_g2y45br",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_wczsb3o",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_wczsb3o_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrLotsVisitFreedomUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_g2y45br",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ksd47y6",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ksd47y6_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_ksd47y6_GridDetail_y6dud8b",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_y6dud8b"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_ksd47y6_SearchValue",
							"GridDetailSearchFilter_ksd47y6_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_yaxdaed",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_rxtaa4c",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_hke6y0b",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LotsVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_y6dud8b",
					"activeRow": "$GridDetail_y6dud8b_ActiveRow",
					"selectionState": "$GridDetail_y6dud8b_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_y6dud8b_SelectionState"
					},
					"primaryColumnName": "GridDetail_y6dud8bDS_Id",
					"columns": [
						{
							"id": "cb4134db-5bc7-d539-2107-04d6536ba695",
							"code": "GridDetail_y6dud8bDS_UsrResponsibleManager",
							"caption": "#ResourceString(GridDetail_y6dud8bDS_UsrResponsibleManager)#",
							"dataValueType": 10
						},
						{
							"id": "d0723923-1af5-4931-6c62-f53f2013ff02",
							"code": "GridDetail_y6dud8bDS_UsrClient",
							"caption": "#ResourceString(GridDetail_y6dud8bDS_UsrClient)#",
							"dataValueType": 10
						},
						{
							"id": "67fab3c7-8941-29e0-3dc2-9851293f990f",
							"code": "GridDetail_y6dud8bDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_y6dud8bDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "d265046b-50f6-f245-76d1-929c4ed35a9d",
							"code": "GridDetail_y6dud8bDS_UsrClientComment",
							"caption": "#ResourceString(GridDetail_y6dud8bDS_UsrClientComment)#",
							"dataValueType": 28
						},
						{
							"id": "834f9247-c6ad-c81c-1e11-7b86eee4158f",
							"code": "GridDetail_y6dud8bDS_UsrRealtorsComment",
							"caption": "#ResourceString(GridDetail_y6dud8bDS_UsrRealtorsComment)#",
							"dataValueType": 28
						},
						{
							"id": "c6d87c57-4f79-c34c-c616-6ca12e4b5213",
							"code": "GridDetail_y6dud8bDS_UsrState",
							"caption": "#ResourceString(GridDetail_y6dud8bDS_UsrState)#",
							"dataValueType": 10
						},
						{
							"id": "1f24c039-2eef-4385-e9a5-34887d15dc16",
							"code": "GridDetail_y6dud8bDS_UsrResult",
							"caption": "#ResourceString(GridDetail_y6dud8bDS_UsrResult)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_rxtaa4c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_y6dud8b_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_y6dud8bDS",
							"filters": "$GridDetail_y6dud8b | crt.ToCollectionFilters : 'GridDetail_y6dud8b' : $GridDetail_y6dud8b_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_y6dud8b_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "LotsVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_y6dud8b_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_y6dud8bDS",
							"filters": "$GridDetail_y6dud8b | crt.ToCollectionFilters : 'GridDetail_y6dud8b' : $GridDetail_y6dud8b_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_y6dud8b_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_y6dud8b_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_y6dud8b_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "LotsVisitGridDetail",
							"filters": "$GridDetail_y6dud8b | crt.ToCollectionFilters : 'GridDetail_y6dud8b' : $GridDetail_y6dud8b_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_y6dud8b_SelectionState"
						}
					}
				},
				"parentName": "LotsVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_y6dud8b_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_y6dud8bDS",
							"selectionState": "$GridDetail_y6dud8b_SelectionState"
						}
					}
				},
				"parentName": "LotsVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetail_y6dud8b_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_y6dud8bDS",
							"filters": "$GridDetail_y6dud8b | crt.ToCollectionFilters : 'GridDetail_y6dud8b' : $GridDetail_y6dud8b_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_y6dud8b_SelectionState"
						}
					}
				},
				"parentName": "LotsVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrMaxRealtorCommission": {},
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrLotsType_j0w3ba7": {
						"modelConfig": {
							"path": "PDS.UsrLotsType"
						}
					},
					"PDS_UsrLotsType_j0w3ba7_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PDS_UsrLotsPublicationDate_9erjxdl": {
						"modelConfig": {
							"path": "PDS.UsrLotsPublicationDate"
						}
					},
					"PDS_UsrLotsOwner_lhfxhjm": {
						"modelConfig": {
							"path": "PDS.UsrLotsOwner"
						}
					},
					"PDS_UsrLotsOwner_lhfxhjm_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrLotsRealtor_1o4gawr": {
						"modelConfig": {
							"path": "PDS.UsrLotsRealtor"
						}
					},
					"PDS_UsrLotsRealtor_1o4gawr_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrLotsStatus_oqhs3qp": {
						"modelConfig": {
							"path": "PDS.UsrLotsStatus"
						}
					},
					"PDS_UsrLotsStatus_oqhs3qp_List": {
						"isCollection": true,
						"modelConfig": {}
					},
					"PDS_UsrLotsCurrency_x99y0tn": {
						"modelConfig": {
							"path": "PDS.UsrLotsCurrency"
						}
					},
					"PDS_UsrLotsCurrency_x99y0tn_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrLotsCost_jy4lsb4": {
						"modelConfig": {
							"path": "PDS.UsrLotsCost"
						}
					},
					"PDS_UsrLotsRealtorsCommission_yak26ra": {
						"modelConfig": {
							"path": "PDS.UsrLotsRealtorsCommission"
						},
						"validators": {
							"MaxValueValidator": {
								"type": "usr.MaxValueValidator",
								"params": {
									"maxValue": 10000,
									"message": "Commission can not be more than 10,000"
								}
							}
						}
					},
					"GridDetail_y6dud8b": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_y6dud8bDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_ksd47y6_GridDetail_y6dud8b",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_y6dud8b_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_y6dud8bDS_UsrResponsibleManager": {
									"modelConfig": {
										"path": "GridDetail_y6dud8bDS.UsrResponsibleManager"
									}
								},
								"GridDetail_y6dud8bDS_UsrClient": {
									"modelConfig": {
										"path": "GridDetail_y6dud8bDS.UsrClient"
									}
								},
								"GridDetail_y6dud8bDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_y6dud8bDS.UsrVisitDateTime"
									}
								},
								"GridDetail_y6dud8bDS_UsrClientComment": {
									"modelConfig": {
										"path": "GridDetail_y6dud8bDS.UsrClientComment"
									}
								},
								"GridDetail_y6dud8bDS_UsrRealtorsComment": {
									"modelConfig": {
										"path": "GridDetail_y6dud8bDS.UsrRealtorsComment"
									}
								},
								"GridDetail_y6dud8bDS_UsrState": {
									"modelConfig": {
										"path": "GridDetail_y6dud8bDS.UsrState"
									}
								},
								"GridDetail_y6dud8bDS_UsrResult": {
									"modelConfig": {
										"path": "GridDetail_y6dud8bDS.UsrResult"
									}
								},
								"GridDetail_y6dud8bDS_Id": {
									"modelConfig": {
										"path": "GridDetail_y6dud8bDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_y6dud8b_PredefinedFilter": {
						"value": null
					},
					"PDS_UsrLotsRealty_b8uyngl": {
						"modelConfig": {
							"path": "PDS.UsrLotsRealty"
						}
					},
					"PDS_UsrLotsRealty_b8uyngl_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "UsrName",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrLotsTypeUsrCommissionPercent_zuxu53p": {
						"modelConfig": {
							"path": "PDS.UsrLotsTypeUsrCommissionPercent_zuxu53p"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_y6dud8bDS": [
							{
								"attributePath": "UsrParentLots",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrLotsFreedomUI",
							"attributes": {
								"UsrLotsTypeUsrCommissionPercent_zuxu53p": {
									"path": "UsrLotsType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_y6dud8bDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrLotsVisitFreedomUI",
							"attributes": {
								"UsrResponsibleManager": {
									"path": "UsrResponsibleManager"
								},
								"UsrClient": {
									"path": "UsrClient"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrClientComment": {
									"path": "UsrClientComment"
								},
								"UsrRealtorsComment": {
									"path": "UsrRealtorsComment"
								},
								"UsrState": {
									"path": "UsrState"
								},
								"UsrResult": {
									"path": "UsrResult"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
					if (request.attributeName === 'PDS_UsrLotsCost_jy4lsb4' ||
					request.attributeName === 'PDS_UsrLotsTypeUsrCommissionPercent_zuxu53p' ) {
					var price = await request.$context.PDS_UsrLotsCost_jy4lsb4;
					var percent = await request.$context.PDS_UsrLotsTypeUsrCommissionPercent_zuxu53p;
					var commission = price * percent / 100;
					const sysSettingsService = new sdk.SysSettingsService();
					// const maxCommission = await sysSettingsService.getByCode('UsrMaxRealtorCommission');
					// if (commission > maxCommission.value){
					// 	commission = maxCommission.value;
					// }
					request.$context.PDS_UsrLotsRealtorsCommission_yak26ra = commission;
					}
				return next?.handle(request);
				}
			},
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.MaxValueValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let maxValue = config.maxValue;
						let valueIsCorrect = value <= maxValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							// Повертаємо об'єкт з властивістю і підлеглим об'єктом
							result = {
								"usr.MaxValueValidator": {
									message: config.message
								}
							};
						}
						return result;
					};
			},
			params: [
				{
					name: "maxValue"
				},
				{
					name: "message"
				}
			],
			async: false
		}
		}/**SCHEMA_VALIDATORS*/
	};
});