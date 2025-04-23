<?php
/**
 * Plugin Name:       Competitor Review Blocks
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       competitor-review-blocks
 *
 * @package CompetitorReviewBlocks
 */

if (!defined('ABSPATH')) {
	exit;
}

function competitor_review_blocks_competitor_review_blocks_block_init()
{

	if (function_exists('wp_register_block_types_from_metadata_collection')) {
		wp_register_block_types_from_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
		return;
	}


	if (function_exists('wp_register_block_metadata_collection')) {
		wp_register_block_metadata_collection(__DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php');
	}

	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach (array_keys($manifest_data) as $block_type) {
		register_block_type(__DIR__ . "/build/{$block_type}");
	}
}
add_action('init', 'competitor_review_blocks_competitor_review_blocks_block_init');

function competitor_review_blocks_enqueue_frontend_styles()
{
	wp_enqueue_style(
		'competitor-review-blocks-frontend-style',
		plugin_dir_url(__FILE__) . 'assets/css/style.css',
		array(),
		filemtime(plugin_dir_path(__FILE__) . 'assets/css/style.css')
	);
}
add_action('wp_enqueue_scripts', 'competitor_review_blocks_enqueue_frontend_styles');
