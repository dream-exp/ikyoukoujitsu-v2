import os
import re
from PIL import Image

# 指定したフォルダ内のMDXファイルを再帰的に探索する関数
def find_mdx_files(folder):
    mdx_files = []
    for root, dirs, files in os.walk(folder):
        for file in files:
            if file.endswith(".mdx"):
                mdx_files.append(os.path.join(root, file))
    return mdx_files

# 画像のパスを元に横幅と縦幅を求める関数
def get_image_dimensions(image_path):
    with Image.open(image_path) as img:
        width, height = img.size
    return width, height

# MDXファイル内の画像参照をHTMLのimgタグに変換する関数
def convert_mdx_images(file_path, image_prefix):
    with open(file_path, 'r', encoding='utf-8') as file:
        mdx_content = file.read()

    # 画像のパスを抽出して、imgタグに変換
    img_pattern = r'!\[(.*?)\]\((.*?)\)'
    img_tags = re.findall(img_pattern, mdx_content)
    for index, (alt_text, img_path) in enumerate(img_tags):
        # 画像の横幅と縦幅を求める
        image_path = image_prefix + img_path
        print(file_path, image_path)
        width, height = get_image_dimensions(image_path)
        # HTMLのimgタグに変換して置換
        if index >= 2:  # 3番目以降の画像にloading="lazy"を追加
            new_img_tag = f'<img src="{img_path}" alt="{alt_text}" width="{width}" height="{height}" loading="lazy" className="bg-gradient-to-r from-neutral-200 to-slate-200" />'
        else:
            new_img_tag = f'<img src="{img_path}" alt="{alt_text}" width="{width}" height="{height}" className="bg-gradient-to-r from-neutral-200 to-slate-200" />'
        mdx_content = mdx_content.replace(f'![{alt_text}]({img_path})', new_img_tag)

    # 変換した内容をファイルに書き込む
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(mdx_content)

# 指定したフォルダ内のMDXファイルを再帰的に探索して処理を行う
folder_path = "/Users/dream_exp/Desktop/Projects/ikyoukoujitsu-v2/src/pages/test/post" # フォルダのパスを指定
image_prefix = '/Users/dream_exp/Desktop/Projects/ikyoukoujitsu/ikyoukoujitsu-v2/public'  # 画像フォルダのプレフィックスを指定
mdx_files = find_mdx_files(folder_path)

for mdx_file in mdx_files:
    convert_mdx_images(mdx_file, image_prefix)
