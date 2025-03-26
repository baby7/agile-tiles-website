---
outline: deep
---

# 开发者文档

## Python卡片插件开发

### 示例

持续更新中...

```md
import random

from PySide6.QtCore import QObject
from PySide6.QtWidgets import QVBoxLayout, QPushButton
from PySide6 import QtGui


class PluginCard(QObject):

    # 基础声明
    title = "答案之书"                                    # 名称
    name = "AnswerCard"                                 # 卡片标题
    support_size_list = ["2_1", "4_1", "2_2"]           # 卡片支持的尺寸
    # 卡片本体
    card_object = None                                  # 卡片本体
    # 属性
    ui_setting = None                                   # 卡片属性设置
    # 数据
    card_cache = None                                   # 卡片缓存,删除卡片即消失(字典)
    card_data = None                                    # 卡片数据,除非用户删除否则不会消失(字典)
    # 可调用
    toolkit = None                                      # 工具箱，具体参考文档
    save_func = None                                    # 保存数据(传参为一个字典)
    logger = None                                       # 日志记录工具
    # 定制
    answers = []

    def __init__(self, card_object, ui_setting, card_cache, card_data, save_func, toolkit, logger):
        super().__init__()
        # 批量初始化
        attrs = ['card_object', 'ui_setting', 'card_cache', 'card_data', 'save_func', 'toolkit', 'logger']
        for attr in attrs:
            setattr(self, attr, locals()[attr])
        self.answers = ["AAA", "BBB"]

    def init_ui(self):
        # 主布局
        layout = QVBoxLayout()
        layout.setContentsMargins(5, 5, 5, 5)
        # 一言
        font = QtGui.QFont()
        font.setFamily("思源黑体")
        font.setPointSize(12)
        self.content_button = QPushButton()
        self.content_button.setFont(font)
        self.content_button.setStyleSheet("""
        QPushButton{
            border: 0px solid black;
            background:transparent;
            word-wrap: break-word;
        }
        QPushButton:hover {
            font-weight: bold;
        }""")
        self.content_button.setText(self.get_word())
        self.content_button.setFixedSize(self.card_object.width() - 10, self.card_object.height() - 10)
        self.content_button.setMaximumSize(self.card_object.width() - 10, self.card_object.height() - 10)
        layout.addWidget(self.content_button)
        # 按钮事件
        self.content_button.clicked.connect(self.refresh_content)
        self.card_object.setLayout(layout)

    def refresh_content(self):
        self.content_button.setText(self.get_word())

    def get_word(self):
        word = random.choice(self.answers)
        # 每超过8个字就换行
        if len(word) > 8:
            word = word[:8] + "\n" + word[8:]
        return word

    def refresh_data(self, date_time_str):
        pass

    def refresh_ui(self, date_time_str):
        pass

    def refresh_theme(self):
        pass

    def enter_event(self):
        pass

    def leave_event(self):
        pass
```



## Html卡片插件开发

持续更新中...