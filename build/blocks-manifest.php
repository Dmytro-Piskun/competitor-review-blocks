<?php
// This file is generated. Do not modify it manually.
return array(
	'accordion-container' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'competitor-review-blocks/accordion-container',
		'version' => '0.1.0',
		'title' => 'Accordion',
		'category' => 'widgets',
		'icon' => 'list-view',
		'description' => 'Container for accordion items',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'accordion-container',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'accordion-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'competitor-review-blocks/accordion-item',
		'version' => '0.1.0',
		'title' => 'Accordion Item',
		'category' => 'widgets',
		'icon' => 'block-default',
		'description' => 'Item for accordion container',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'accordion-item',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'parent' => array(
			'competitor-review-blocks/accordion-container'
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string'
			)
		)
	),
	'comparisons' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'competitor-review-blocks/comparisons',
		'version' => '0.1.0',
		'title' => 'Comparisons',
		'category' => 'widgets',
		'icon' => 'block-default',
		'description' => 'Comparisons block',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'comparisons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'cards' => array(
				'type' => 'array',
				'default' => array(
					array(
						'image1' => '',
						'image2' => '',
						'link' => ''
					),
					array(
						'image1' => '',
						'image2' => '',
						'link' => ''
					),
					array(
						'image1' => '',
						'image2' => '',
						'link' => ''
					)
				)
			)
		)
	),
	'cons-heading' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'competitor-review-blocks/cons-heading',
		'version' => '0.1.0',
		'title' => 'Cons Heading',
		'category' => 'widgets',
		'icon' => 'block-default',
		'description' => 'Cons heading',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'cons-heading',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'parent' => array(
			'competitor-review-blocks/nestable-table-cell'
		)
	),
	'nestable-table' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'competitor-review-blocks/nestable-table',
		'version' => '0.1.0',
		'title' => 'Nestable Table',
		'category' => 'widgets',
		'icon' => 'block-default',
		'description' => 'Table that allows nesting other blocks',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'nestable-table',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'columns' => array(
				'type' => 'number',
				'default' => '2'
			),
			'rows' => array(
				'type' => 'number',
				'default' => '2'
			),
			'buttonsRow' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'providesContext' => array(
			'nestable-table/columns' => 'columns'
		)
	),
	'nestable-table-button' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'competitor-review-blocks/nestable-table-button',
		'version' => '0.1.0',
		'title' => 'Nestable Table Button',
		'category' => 'widgets',
		'icon' => 'block-default',
		'description' => 'Button for nestable table',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'nestable-table-button',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'parent' => array(
			'competitor-review-blocks/nestable-table-cell'
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string'
			),
			'link' => array(
				'type' => 'string'
			)
		)
	),
	'nestable-table-cell' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'competitor-review-blocks/nestable-table-cell',
		'version' => '0.1.0',
		'title' => 'Nestable table cell',
		'category' => 'widgets',
		'icon' => 'block-default',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'nestable-table-cell',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'parent' => array(
			'competitor-review-blocks/nestable-table-row'
		)
	),
	'nestable-table-row' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'competitor-review-blocks/nestable-table-row',
		'version' => '0.1.0',
		'title' => 'Nestable Table Row',
		'category' => 'widgets',
		'icon' => 'block-default',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'nestable-table-row',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'parent' => array(
			'competitor-review-blocks/nestable-table'
		),
		'usesContext' => array(
			'nestable-table/columns'
		),
		'attributes' => array(
			'columns' => array(
				'type' => 'number'
			)
		)
	),
	'pros-and-cons' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'competitor-review-blocks/pros-and-cons',
		'version' => '0.1.0',
		'title' => 'Pros And Cons',
		'category' => 'widgets',
		'icon' => 'list-view',
		'description' => 'A block for pros and cons list.',
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'pros-and-cons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'pros' => array(
				'type' => 'string',
				'default' => ''
			),
			'cons' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	),
	'pros-heading' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'competitor-review-blocks/pros-heading',
		'version' => '0.1.0',
		'title' => 'Pros Heading',
		'category' => 'widgets',
		'icon' => 'block-default',
		'description' => 'Pros heading',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'pros-heading',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'parent' => array(
			'competitor-review-blocks/nestable-table-cell'
		)
	),
	'rating-comparison' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'competitor-review-blocks/rating-comparison',
		'version' => '0.1.0',
		'title' => 'Rating Comparison',
		'category' => 'widgets',
		'icon' => 'block-default',
		'description' => 'Rating comparison block',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'rating-comparison',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'cards' => array(
				'type' => 'array',
				'default' => array(
					array(
						'image' => '',
						'overallRating' => '4.5',
						'ratings' => array(
							array(
								'reviewer' => 'G2',
								'rating' => '4.5'
							),
							array(
								'reviewer' => 'Capterra',
								'rating' => '4.5'
							),
							array(
								'reviewer' => 'Trustpilot',
								'rating' => '4.5'
							)
						),
						'link' => ''
					),
					array(
						'image' => '',
						'overallRating' => '4.5',
						'ratings' => array(
							array(
								'reviewer' => 'G2',
								'rating' => '4.5'
							),
							array(
								'reviewer' => 'Capterra',
								'rating' => '4.5'
							),
							array(
								'reviewer' => 'Trustpilot',
								'rating' => '4.5'
							)
						),
						'link' => ''
					)
				)
			)
		)
	),
	'review-carousel' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'competitor-review-blocks/review-carousel',
		'version' => '0.1.0',
		'title' => 'Review Carousel',
		'category' => 'widgets',
		'icon' => 'block-default',
		'description' => 'Carousel for reviews',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'review-carousel',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'globalHeading' => array(
				'type' => 'string',
				'default' => 'What people say about Sender'
			),
			'cards' => array(
				'type' => 'array',
				'default' => array(
					
				),
				'items' => array(
					'type' => 'object',
					'properties' => array(
						'name' => array(
							'type' => 'string'
						),
						'avatar' => array(
							'type' => 'string'
						),
						'reviewSource' => array(
							'type' => 'string'
						),
						'rating' => array(
							'type' => 'number'
						),
						'heading' => array(
							'type' => 'string'
						),
						'text' => array(
							'type' => 'string'
						)
					)
				)
			)
		)
	)
);
