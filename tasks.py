import os
import os.path as op
from invoke import run, task
from pathlib2 import Path, PurePath


TITLE = 'Ionic 1 Examples'


@task
def serve():
    import SimpleHTTPServer
    if not op.isdir('build'):
        print 'No build directory. First run `invoke build`.'
        return
    # os.chdir('build')
    run('cd build && python -m SimpleHTTPServer')


@task
def build():
    import string

    www_dirs = []
    clean()

    if not op.exists('build'):
        os.mkdir('build')

    for item in Path('.').iterdir():
        if item.is_dir():
            www_dir = item / 'www'
            if not item.name.startswith('.') and www_dir.is_dir():
                www_dirs.append(item.name)
                src = item / 'www'
                dest = Path('build') / item.name
                print 'Copying %s to %s' % (src, dest)
                run('cp -r %s %s' % (src, dest))

    with open('build/index.html', 'w') as fp:
        body = ''
        for www_dir in www_dirs:
            body += '  <li><a href="%s">%s</a></li>\n' % (www_dir, www_dir)

        tmpl = string.Template(INDEX_PAGE_TEMPLATE)
        fp.write(tmpl.substitute(title=TITLE, body=body))


@task
def clean():
    if op.isdir('build'):
        run('rm -rf build/*')


@task
def publish():
    build()
    run('ghp-import -n -p build')


INDEX_PAGE_TEMPLATE = """\
<!doctype html>
<html class="no-js" lang="">
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<h1>${title}</h1>

<ul>
${body}
</ul>
</body>
</html>"""
