from PyPDF2 import PdfReader
from pdf2docx import parse
from flask import Flask, render_template, redirect, url_for, request
from docx import *
import re
import fitz
import aspose.words as aw

files = ['templates/Московкин.docx',
         "templates/Ищенко.docx",
         'templates/Корпоративные предложения сотрудникам Росмолодежи 10.01.23.docx',
         'templates/Памятка настройки IOS.pdf',
         'templates/РЕМЦ.pdf',
         ]
filesdocx = []


for file in files:
    if re.findall(r'.docx', file):
        filesdocx.append(file)
    elif re.findall('.pdf', file):
        doc = aw.Document(file)
        doc.save(f"{file}.docx")
        filesdocx.append(file)

print(*filesdocx)